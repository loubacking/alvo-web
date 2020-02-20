import React, { Component, Fragment } from 'react';
import '../../../App.css';
import { Container, Col, Table, Button, Modal } from 'react-bootstrap';
import Footer from '../../../components/Footer';
import { fetchAllArtists } from '../../../api/artists';
import Header from '../../../components/Header';
import { Wrapper } from './styled';

class AdminArtists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            show: false
        };
      }

    componentDidMount() {
        fetchAllArtists().then(({data}) => {
            this.setState({ artists: data })
        });
    }

    toggleModal = () => {
      this.setState(prevState => ({
        show: !prevState.show
      }))
    }

    render() {
        const { artists, show } = this.state;
        console.log(artists)
        return (
            <Fragment>
                <Header />
                <Container>
                    <Col>
                    <Wrapper>
                      <Button onClick={this.toggleModal}>Criar</Button>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Nome</th>
                          </tr>
                        </thead>
                        <tbody>
                          {artists.map(artist => (<tr><td>{artist._id}</td><td>{artist.name}</td></tr>))}
                        </tbody>
                      </Table>
                      </Wrapper>
                    </Col>
                </Container>
                <Footer />
                <Modal show={show} >
                  <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.toggleModal}>
                      Cancelar
                    </Button>
                    <Button variant="primary" onClick={this.toggleModal}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default AdminArtists;
