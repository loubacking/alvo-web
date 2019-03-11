import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Container, Col } from 'react-bootstrap';
import { Image, ArtistWrapper, ArtistName, SongsWrapper, SongName, Title, Index } from './styled';
import Footer from '../../components/Footer';
import { fetchArtists, fetchAllSongsArtists } from '../../api/artists';
import Header from '../../components/Header';

class Artists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistId: props.location.state.artistId,
            name: '',
            image: '',
            songs: []
        };
      }

    componentDidMount() {
        const { artistId } = this.state;
        fetchArtists(artistId).then(res => {
            this.setState({ name: res.data.name, image: res.data.image })
        });

        fetchAllSongsArtists(artistId).then(res => {
            this.setState({ songs: res.data })
        })
    }

    render() {
        const { name, image, songs } = this.state;
        return (
            <Fragment>
                <Header />
                <Container>
                    <Col>
                        <ArtistWrapper>
                            {image && <Image src={image} />}
                            <ArtistName>{name}</ArtistName>
                        </ArtistWrapper>
                    </Col>
                    <Col>
                        <SongsWrapper>
                            <Title>Mais tocadas</Title>
                            {songs && songs.map((song, index) => {
                                return (
                                <Link to={{ pathname: '/songs', state: { songId: song._id} }}>
                                <SongName>
                                    <Index>{(index + 1)}</Index>
                                    {song.name}
                                </SongName>
                                </Link>
                                )
                            })}
                            
                        </SongsWrapper>
                    </Col>
                </Container>
                <Footer />
            </Fragment>
        );
    }
}

export default Artists;
