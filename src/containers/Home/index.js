import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import logo from '../../assets/images/logo-alvo.png';
import { Logo } from './styled';
import Footer from '../../components/Footer';

class Home extends Component {

    render() {

        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col style={styles.logo} md={{ span: 10, offset: 1 }}>
                            <Logo src={logo} />
                      </Col>
                    </Row>
                    <Row>
                        <Col style={styles.title} md={{ span: 10, offset: 1 }}>
                            Aprenda a tocar e cantar suas músicas favoritas de Alvo
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
                            <div style={styles.suggestionText}>
                                <span style={{ marginRight: 15 }}> Sujeito a reboque </span>
                                <span style={{ marginRight: 15 }}> Marcos Almeida </span>
                                <span style={{ marginRight: 15 }}> Lorena Chaves </span>
                                <span style={{ marginRight: 15 }}> Tanlan </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = {
    logo: {
        marginTop: 50,
        marginBottom: 25,
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600,
        fontSize: 20
    },
    title: {
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600,
        fontSize: 49,
        color: '#424242',
        letterSpacing: 1.23,
        marginBottom: 30,
        lineHeight: 1.2
    },
    search: {
        borderRadius: 24
    },
    suggestionTitle: {
        fontFamily: 'Arial, sans-serif',
        fontSize: 16,
        color: '#424242',
        letterSpacing: 0.5,
        fontWeight: 600,
        marginBottom: 10
    },
    suggestionText: {
        fontFamily: 'Arial, sans-serif',
        fontSize: 13,
        color: '#5959BE',
        letterSpacing: 0.5
    }
}
