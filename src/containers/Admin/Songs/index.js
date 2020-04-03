import React, { useState, useEffect, Fragment } from 'react';
import '../../../App.css';
import { Container, Col, Table, Button, Modal, I, Form } from 'react-bootstrap';
import Footer from '../../../components/Footer';
import { fetchAllArtists, createArtist } from '../../../api/artists';
import Header from '../../../components/Header';
import { Wrapper, FormWrapper } from './styled';
import { FormControl } from 'react-bootstrap';
import { fetchAllSongs, createSong } from '../../../api/songs';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function AdminSongs(props) {
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [show, setShow] = useState(false);
  const [artistName, setArtistName] = useState('');
  const [artistUrl, setArtistUrl] = useState('');
  const [selectedArtist, setSelectedArtist] = useState({});
  const [songName, setSongName] = useState('');
  const [contentLyrics, setContentLyrics] = useState('');
  const [contentChords, setContentChords] = useState('');

  useEffect(() => {
    fetchAllArtists().then(({ data }) => setArtists(data));

    fetchAllSongs().then(({ data }) => setSongs(data));
  });

  const toggleModal = () => setShow(!show);

  const createNewSong = async () => {
    const obj = {
      artistId: selectedArtist,
      name: songName,
      lyrics: contentLyrics,
      chords: contentChords
    }
    createSong(obj);
    toggleModal();
  }

  const onContentLyricsChange = (contentState) => setContentLyrics(contentState);

  const onContentChordsChange = (contentState) => setContentChords(contentState);

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
                  <th>Artista</th>
                </tr>
              </thead>
              <tbody>
                {songs.map(song => (<tr><td>{song._id}</td><td>{song.name}</td><td>{song.artistName}</td></tr>))}
              </tbody>
            </Table>
          </Wrapper>
        </Col>
      </Container>
      <Footer />
      <Modal show={show} size='lg' >
        <Modal.Header>
          <Modal.Title>Criar Música</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormWrapper>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Artista</Form.Label>
              <Form.Control as="select" value={selectedArtist} onChange={e => setSelectedArtist(e.target.value)}>
                {artists.map(artist => <option key={artist._id} value={artist._id}>{artist.name}</option>)}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Música</Form.Label>
              <Form.Control type="text" value={songName} onChange={e => setSongName(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Letra</Form.Label>
              <Editor
                editorStyle={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#F1F1F1', height: '500px' }}
                onContentStateChange={onContentLyricsChange}
              />
            </Form.Group>
            <Form.Label>Cifra</Form.Label>
            <Editor
              editorStyle={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#F1F1F1', height: '500px' }}
              onContentStateChange={onContentChordsChange}
            />
          </FormWrapper>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>Cancelar</Button>
          <Button variant="primary" onClick={createNewSong}>Criar</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
