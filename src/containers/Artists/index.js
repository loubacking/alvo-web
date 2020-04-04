import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { fetchArtists, fetchAllSongsArtists } from "../../api/artists";

import "../../App.css";
import {
  Image,
  ArtistWrapper,
  ArtistName,
  SongsWrapper,
  SongName,
  Title,
  Index
} from "./styled";


const Artists = props => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const artistId = props.location.state.artistId;
    fetchArtists(artistId).then((res) => {
      setName(res.data.name);
      setImage(res.data.image);
    });

    fetchAllSongsArtists(artistId).then((res) => {
      setSongs(res.data);
    });
  }, []);

  return (
    <>
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
            {songs &&
              songs.map((song, index) => {
                return (
                  <Link
                    to={{ pathname: "/songs", state: { songId: song._id } }}
                  >
                    <SongName>
                      <Index>{index + 1}</Index>
                      {song.name}
                    </SongName>
                  </Link>
                );
              })}
          </SongsWrapper>
        </Col>
      </Container>
      <Footer absolute />
    </>
  );
}

export default Artists;
