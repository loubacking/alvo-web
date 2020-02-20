import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import {
  Image,
  ArtistWrapper,
  ArtistName,
  TagsWrapper,
  SongName,
  Lyrics,
  Chords,
  RowStyled
} from "./styled";
import Footer from "../../components/Footer";
import { fetchArtists } from "../../api/artists";
import { fetchSongs } from "../../api/songs";
import Header from "../../components/Header";
import Tags from "./components/Tags";
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songId: props.location.state.songId,
      name: "",
      image: "",
      lyrics: "",
      chords: {},
      artistName: "",
      isLyrics: true
    };
  }

  componentDidMount() {
    const { songId } = this.state;
    fetchSongs(songId).then((res) => {
      console.log(res);
      this.setState({
        lyrics: res.data.lyrics,
        name: res.data.name,
        artistName: res.data.artistName,
        artistId: res.data.artistId,
        chords: res.data.chords
      });
      fetchArtists(res.data.artistId).then((response) => {
        this.setState({ image: response.data.image });
      });
    });
  }

  toggleLyrics = (value) => {
    console.log(value);
    const verify = value === "Letra" ? true : false;
    console.log(verify);
    this.setState({
      isLyrics: verify
    });
  };

  render() {
    const {
      name,
      image,
      artistName,
      lyrics,
      isLyrics,
      artistId,
      chords
    } = this.state;
    let formattedChords = '';
    if (Object.entries(chords).length > 0) {
      formattedChords = stateToHTML(convertFromRaw(chords));
    }

    return (
      <Fragment>
        <Header />
        <Container>
          <Row>
            <Col md={2} xs={12}>
              <ArtistWrapper>{image && <Image src={image} />}</ArtistWrapper>
            </Col>
            <Col md={6} xs={12}>
              <SongName>{name}</SongName>
              <Link to={{ pathname: "/artists", state: { artistId } }}>
                <ArtistName>{artistName}</ArtistName>
              </Link>
              <TagsWrapper>
                <RowStyled>
                  <Tags
                    tags={["Cifra", "Letra"]}
                    toggleLyrics={this.toggleLyrics}
                  />
                </RowStyled>
              </TagsWrapper>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 2 }} xs={{ span: 12 }}>
              {isLyrics ? (
                <Lyrics>{lyrics}</Lyrics>
              ) : (
                <Chords dangerouslySetInnerHTML={{ __html: formattedChords }} />
              )}
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Songs;
