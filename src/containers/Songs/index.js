import React, { Component, Fragment } from 'react';
import '../../App.css';
import { Container, Col, Row } from 'react-bootstrap';
import { Image, ArtistWrapper, ArtistName, TagsWrapper, SongName } from './styled';
import Footer from '../../components/Footer';
import { fetchArtists } from '../../api/artists';
import { fetchSongs } from '../../api/songs';
import Header from '../../components/Header';
import Tags from './components/Tags';

class Songs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songId: props.location.state.songId,
            name: '',
            image: '',
            lyrics: '',
            artistName: ''
        };
      }

    componentDidMount() {
        const { songId } = this.state;
        fetchSongs(songId).then(res => {
            this.setState({ lyrics: res.data.lyrics, name: res.data.name, artistName: res.data.artistName });
            fetchArtists(res.data.artistId).then(response => {
                this.setState({ image: response.data.image })
            })
        });
    }

    render() {
        const { name, image, artistName } = this.state;
        return (
            <Fragment>
                <Header />
                <Container>
                    <Row>
                        <Col xs={2}>
                            <ArtistWrapper>
                                {image && <Image src={image} />}

                            </ArtistWrapper>
                        </Col>
                        <Col xs={6}>
                            <SongName>{name}</SongName>
                            <ArtistName>{artistName}</ArtistName>
                            <TagsWrapper>
                                <Row>
                                    <Tags tags={["Cifra", "Letra"]} />
                                </Row>
                            </TagsWrapper>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </Fragment>
        );
    }
}

export default Songs;
