import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/images/logo-alvo.png';
import { Logo } from './styled';
import Footer from '../../components/Footer';
import { fetchArtists } from '../../api/artists';

class Artists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
      }

    componentDidMount() {
        fetchArtists('5c115d7ce7179a2e270772fe').then(res => {
            console.log(res);
            this.setState({ name: res.data.name })
        })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            {this.state.name}
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </Fragment>
        );
    }
}

export default Artists;
