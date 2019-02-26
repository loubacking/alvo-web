import React, { Component, Fragment } from 'react';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Image, ArtistWrapper, ArtistName, SongsWrapper, SongName, Title, Index } from './styled';
import Footer from '../../components/Footer';
import { fetchArtists, fetchAllSongsArtists } from '../../api/artists';
import Header from '../../components/Header';

class Artists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            songs: []
        };
      }

    componentDidMount() {
        fetchArtists('5c74bee2fb6fc0720128d40e').then(res => {
            console.log(res);
            this.setState({ name: res.data.name, image: res.data.image })
        });

        fetchAllSongsArtists('5c74bee2fb6fc0720128d40e').then(res => {
            console.log(res);
            this.setState({ songs: res.data })
        })
    }

    render() {
        const { songs } = this.state;
        return (
            <Fragment>
                <Header />
                <Container>
                    <Col>
                        <ArtistWrapper>
                            <Image src={this.state.image} />
                            <ArtistName>{this.state.name}</ArtistName>
                        </ArtistWrapper>
                    </Col>
                    <Col>
                        <SongsWrapper>
                            <Title>Mais tocadas</Title>
                            {songs && songs.map((song, index) => {
                                return (<SongName><Index>{(index + 1)}</Index>{song.name}</SongName>)
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
