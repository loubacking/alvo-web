import React, { useState, useEffect, Fragment } from 'react';
import '../../../App.css';
import { Container, Col, Table, Button, Modal, I } from 'react-bootstrap';
import Footer from '../../../components/Footer';
import { fetchAllArtists, createArtist } from '../../../api/artists';
import Header from '../../../components/Header';
import { Wrapper, FormWrapper } from './styled';
import { FormControl } from 'react-bootstrap';

const AdminArtists = () => {
  const [artists, setArtists] = useState([]);
  const [show, setShow] = useState(false);
  const [artistName, setArtistName] = useState('');
  const [artistUrl, setArtistUrl] = useState('');

  useEffect(() => {
    fetchAllArtists().then(({ data }) => {
      setArtists(data);
    });
  });

  const toggleModal = () => setShow(!show);

  const createNewArtist = () => {
    createArtist(artistName, artistUrl);
    toggleModal();
  }

  return (
    <Fragment>
      <Header />
      <Container>
        <Col>
          <Wrapper>
            <Button style={{ float: 'right', margin: 4 }} onClick={toggleModal}>Criar</Button>
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
              onChange={e => setArtistName(e.target.value)}
              style={{ marginBottom: 12 }}
            />
            <FormControl
              placeholder="Imagem do Artista"
              aria-label="Imagem"
              aria-describedby="basic-addon1"
              onChange={e => setArtistUrl(e.target.value)}
            />
          </FormWrapper>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>Cancelar</Button>
          <Button variant="primary" onClick={createNewArtist}>Criar</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default AdminArtists;