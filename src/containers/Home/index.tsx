import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { SearchForm, RecentSearchSkeleton } from './components';
import { Footer, Button } from '../../components';
import { fetchAllArtists } from '../../api/artists';

import logo from '../../assets/images/logo-alvo.png';
import '../../App.css';
import { Logo, Title } from './styled';
import { useEffect } from 'react';

const Home = () => {
  const [artists, setArtists] = useState<any>([]);

  useEffect(() => {
    fetchAllArtists().then(({ data }) => setArtists(data));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col
            style={styles.logo}
            className="d-flex justify-content-between"
            md={{ span: 10, offset: 1 }}
          >
            <Logo src={logo} alt="Alvo Cifras Logo" />
            <div className="row align-items-center">
              <Link style={styles.suggestionText} to={{ pathname: '/login' }}>
                <span style={{ marginRight: 20 }}>Entrar</span>
              </Link>
              <Link to={{ pathname: '/register' }}>
                <Button title="Cadastrar" />
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Title>
              Aprenda a tocar e cantar suas músicas favoritas de Alvo
            </Title>
          </Col>
        </Row>
        <Row>
          <Col style={styles.title} md={{ span: 10, offset: 1 }}>
            <SearchForm />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <div style={styles.suggestionTitle}>
              <span>Busca mais frequentes</span>
            </div>
            {artists ? (
              artists.slice(0, 4).map((artist) => (
                <Link
                  key={artist._id}
                  style={styles.suggestionText}
                  to={{ pathname: '/artists', state: { artistId: artist._id } }}
                >
                  <span style={{ marginRight: 15 }}>{artist.name}</span>
                </Link>
              ))
            ) : (
              <RecentSearchSkeleton />
            )}
          </Col>
        </Row>
      </Container>
      <Footer absolute />
    </>
  );
};

export default Home;

const styles = {
  logo: {
    marginTop: 50,
    marginBottom: 25,
    fontFamily: 'Arial, sans-serif',
    fontWeight: 600,
    fontSize: 20,
  },
  title: {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 600,
    fontSize: 49,
    color: '#424242',
    letterSpacing: 1.23,
    marginBottom: 30,
    lineHeight: 1.2,
  },
  search: {
    borderRadius: 24,
  },
  suggestionTitle: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 16,
    color: '#424242',
    letterSpacing: 0.5,
    fontWeight: 600,
    marginBottom: 10,
  },
  suggestionText: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 13,
    color: '#5959BE',
    letterSpacing: 0.5,
  },
};
