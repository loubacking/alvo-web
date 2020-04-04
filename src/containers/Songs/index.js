import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Spinner } from "react-bootstrap";
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
import { convertFromRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const Songs = ({ location }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [lyrics, setLyrics] = useState({});
  const [chords, setChords] = useState({});
  const [artistName, setArtistName] = useState("");
  const [artistId, setArtistId] = useState("");
  const [isLyrics, setIsLyrics] = useState(true);
  const [formattedChords, setFormattedChords] = useState("");
  const [formattedLyrics, setFormattedLyrics] = useState("");

  useEffect(() => {
    fetchSongs(location.state && location.state.songId).then((res) => {
      setLyrics(res.data.lyrics);
      setName(res.data.name);
      setArtistName(res.data.artistName);
      setArtistId(res.data.artistId);
      setChords(res.data.chords);

      if (chords && Object.entries(chords).length > 0) {
        setFormattedChords(stateToHTML(convertFromRaw(chords)));
      }
      if (lyrics && Object.entries(lyrics).length > 0) {
        setFormattedLyrics(stateToHTML(convertFromRaw(lyrics)));
      }

      fetchArtists(res.data.artistId).then((response) => {
        setImage(response.data.image);
      });
    });
  }, [])

  const toggleLyrics = (value) => {
    const verify = value === "Letra";
    setIsLyrics(verify);
  };

  return (
    <Fragment>
      <Header />
      {artistName && name ? (
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
                    toggleLyrics={toggleLyrics}
                  />
                </RowStyled>
              </TagsWrapper>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 2 }} xs={{ span: 12 }}>
              {isLyrics ? (
                formattedLyrics ? <Lyrics dangerouslySetInnerHTML={{ __html: formattedLyrics }} /> : <Spinner animation="border" variant="secondary" size='md' />
              ) : (
                  <Chords dangerouslySetInnerHTML={{ __html: formattedChords }} />
                )}
            </Col>
          </Row>
        </Container>) : <Container><Col md={12} style={{ display: 'flex', justifyContent: 'center', marginTop: 100, height: 700 }}><Spinner animation="border" color='#5959be' /></Col></Container>}
      <Footer />
    </Fragment>
  );

}

export default Songs;
