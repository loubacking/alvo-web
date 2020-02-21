import React, { Component, Fragment } from 'react';
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

class AdminSongs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            songs: [],
            show: false,
            artistName: '',
            artistUrl: '',
            selectedArtist: {},
            songName: '',
            contentLyrics: '',
            contentChords: ''
        };
      }

    componentDidMount() {
        fetchAllArtists().then(({ data }) => {
            this.setState({ artists: data })
        });

        fetchAllSongs().then(({ data }) => this.setState({ songs: data }));
    }

    toggleModal = () => {
      this.setState(prevState => ({
        show: !prevState.show
      }))
    }

    createSong = async () => {
      const { selectedArtist, songName, contentLyrics, contentChords } = this.state;
      const obj = {
        artistId: selectedArtist,
        name: songName,
        lyrics: contentLyrics,
        chords: contentChords
      }
      createSong(obj);
      this.toggleModal();
    }

    onContentLyricsChange = (contentState) => {
      this.setState({
        contentLyrics: contentState
      })
    }

    onContentChordsChange = (contentState) => {
      this.setState({
        contentChords: contentState
      })
    }

    render() {
        const { artists, show, songs, selectedArtist, songName } = this.state;
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
                      <Form.Control as="select" value={selectedArtist} onChange={e => this.setState({ selectedArtist: e.target.value })}>
                        {artists.map(artist => <option key={artist._id} value={artist._id}>{artist.name}</option>)}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Música</Form.Label>
                      <Form.Control type="text" value={songName} onChange={e => this.setState({ songName: e.target.value })} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Letra</Form.Label>
                    <Editor
                      editorStyle={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#F1F1F1', height: '500px' }}
                      onContentStateChange={this.onContentLyricsChange}
                    />
                    </Form.Group>
                    <Form.Label>Cifra</Form.Label>
                    <Editor
                      editorStyle={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#F1F1F1', height: '500px' }}
                      onContentStateChange={this.onContentChordsChange}
                    />
                    </FormWrapper>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.toggleModal}>
                      Cancelar
                    </Button>
                    <Button variant="primary" onClick={this.createSong}>
                      Criar
                    </Button>
                  </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default AdminSongs;
