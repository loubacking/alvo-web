import React, { Component, Fragment } from 'react';
import '../../../App.css';
import { Container, Col, Table, Button, Modal, I } from 'react-bootstrap';
import Footer from '../../../components/Footer';
import { fetchAllArtists, createArtist } from '../../../api/artists';
import Header from '../../../components/Header';
import { Wrapper, FormWrapper } from './styled';
import { FormControl } from 'react-bootstrap';

class AdminArtists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            show: false,
            artistName: '',
            artistUrl: ''
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

    createArtist = () => {
      const { artistName, artistUrl } = this.state;
      createArtist(artistName, artistUrl);
      this.toggleModal();
    }

    render() {
        const { artists, show } = this.state;
        return (
            <Fragment>
                <Header />
                <Container>
                    <Col>
                    <Wrapper>
                      <Button style={{ float: 'right', margin: 4 }} onClick={this.toggleModal}>Criar</Button>
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
                    <Modal.Title>Criar Artista</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <FormWrapper>
                      <FormControl
                        placeholder="Nome do Artista"
                        aria-label="Artista"
                        aria-describedby="basic-addon1"
                        onChange={e => this.setState({ artistName: e.target.value })}
                        style={{ marginBottom: 12 }}
                      />
                      <FormControl
                        placeholder="Imagem do Artista"
                        aria-label="Imagem"
                        aria-describedby="basic-addon1"
                        onChange={e => this.setState({ artistUrl: e.target.value })}
                      />
                    </FormWrapper>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.toggleModal}>
                      Cancelar
                    </Button>
                    <Button variant="primary" onClick={this.createArtist}>
                      Criar
                    </Button>
                  </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default AdminArtists;
