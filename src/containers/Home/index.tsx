import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { SearchForm, RecentSearchSkeleton } from './components';
import { Footer, Header } from '../../components';
import { fetchAllArtists } from '../../api/artists';

import '../../App.css';
import { Title } from './styled';
import { useEffect } from 'react';

const Home = () => {
  const [artists, setArtists] = useState<any>([]);

  useEffect(() => {
    fetchAllArtists().then(({ data }) => setArtists(data));
  }, []);

  return (
    <>
      <Header />
      <Container>
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
  title: {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 600,
    fontSize: 49,
    color: '#424242',
    letterSpacing: 1.23,
    marginBottom: 30,
    lineHeight: 1.2,
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
