import React, { Component, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import SearchForm from "./components/SearchForm";
import Footer from "../../components/Footer";
import { fetchAllArtists } from "../../api/artists";

import logo from "../../assets/images/logo-alvo.png";
import "../../App.css";
import { Logo, Title } from "./styled";
import { useEffect } from "react";

const Home = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchAllArtists()
      .then(({ data }) => setArtists(data));
  }, []);

  return (
    <Fragment>
      <Container>
        <Row>
          <Col style={styles.logo} md={{ span: 10, offset: 1 }}>
            <Logo src={logo} />
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
            {artists.slice(0, 4).map((artist) => (
              <Link
                key={artist._id}
                style={styles.suggestionText}
                to={{ pathname: "/artists", state: { artistId: artist._id } }}
              >
                <span style={{ marginRight: 15 }}>{artist.name}</span>
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
      <Footer absolute />
    </Fragment>
  );

}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = {
  logo: {
    marginTop: 50,
    marginBottom: 25,
    fontFamily: "Arial, sans-serif",
    fontWeight: 600,
    fontSize: 20
  },
  title: {
    fontFamily: "Arial, sans-serif",
    fontWeight: 600,
    fontSize: 49,
    color: "#424242",
    letterSpacing: 1.23,
    marginBottom: 30,
    lineHeight: 1.2
  },
  search: {
    borderRadius: 24
  },
  suggestionTitle: {
    fontFamily: "Arial, sans-serif",
    fontSize: 16,
    color: "#424242",
    letterSpacing: 0.5,
    fontWeight: 600,
    marginBottom: 10
  },
  suggestionText: {
    fontFamily: "Arial, sans-serif",
    fontSize: 13,
    color: "#5959BE",
    letterSpacing: 0.5
  }
};
