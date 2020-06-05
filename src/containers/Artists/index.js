import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Spinner } from "react-bootstrap";
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

const Artists = (props) => {
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
      {name ? (
        <Container>
          <Col>
            <ArtistWrapper>
              {image && <Image src={image} />}
              <ArtistName>{name}</ArtistName>
            </ArtistWrapper>
          </Col>
          <Col>
            <SongsWrapper>
              <Title>Músicas</Title>
              {songs &&
                songs.map((song, index) => {
                  return (
                    <Link
                      key={song._id}
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
      ) : (
        <Container>
          <Col
            md={12}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 100,
              height: 700
            }}
          >
            <Spinner animation="border" color="#5959be" />
          </Col>
        </Container>
      )}
      <Footer absolute />
    </>
  );
};

export default Artists;
