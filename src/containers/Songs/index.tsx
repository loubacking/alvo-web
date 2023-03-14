import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import {
  Image,
  ArtistWrapper,
  ArtistName,
  TagsWrapper,
  SongName,
  Lyrics,
  Chords,
  RowStyled
} from './styled';
import { Header, Footer } from '../../components';
import { fetchArtists } from '../../api/artists';
import { fetchSongs } from '../../api/songs';
import Tags from './components/Tags';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

interface SongsProps {
  location: any;
}

const Songs = ({ location }: SongsProps) => {
  const [name, setName] = useState('');
  const [imageUrl, setImage] = useState('');
  const [artistName, setArtistName] = useState('');
  const [artistId, setArtistId] = useState('');
  const [isLyrics, setIsLyrics] = useState(true);
  const [formattedChords, setFormattedChords] = useState('');
  const [formattedLyrics, setFormattedLyrics] = useState('');

  useEffect(() => {
    fetchSongs(location?.state?.songId).then((res) => {
      const { lyrics, name, artistName, artistId, chords } = res.data;

      setName(name);
      setArtistName(artistName);
      setArtistId(artistId);

      if (chords && Object.entries(chords).length > 0) {
        setFormattedChords(stateToHTML(convertFromRaw(chords)));
      }
      if (lyrics && Object.entries(lyrics).length > 0) {
        setFormattedLyrics(stateToHTML(convertFromRaw(lyrics)));
      }

      fetchArtists(artistId).then((response) => {
        setImage(response.data.imageUrl);
      });
    });
  }, [location.state]);

  const toggleLyrics = (value: string) => {
    const verify = value === 'Letra';
    setIsLyrics(verify);
  };

  return (
    <>
      <Header />
      {artistName && name ? (
        <Container>
          <Row>
            <Col md={2} xs={12}>
              <Link to={{ pathname: '/artists', state: { artistId } }}>
                <ArtistWrapper>
                  {imageUrl && <Image src={imageUrl} />}
                </ArtistWrapper>
              </Link>
            </Col>
            <Col md={6} xs={12}>
              <SongName>{name}</SongName>
              <Link to={{ pathname: '/artists', state: { artistId } }}>
                <ArtistName>{artistName}</ArtistName>
              </Link>
              <TagsWrapper>
                <RowStyled>
                  <Tags tags={['Cifra', 'Letra']} toggleLyrics={toggleLyrics} />
                </RowStyled>
              </TagsWrapper>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 2 }} xs={{ span: 12 }}>
              {isLyrics ? (
                formattedLyrics ? (
                  <Lyrics
                    dangerouslySetInnerHTML={{ __html: formattedLyrics }}
                  />
                ) : (
                  <Spinner animation="border" variant="secondary" />
                )
              ) : (
                <Chords dangerouslySetInnerHTML={{ __html: formattedChords }} />
              )}
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Col
            md={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 100,
              height: 700
            }}
          >
            <Spinner animation="border" color="#5959be" />
          </Col>
        </Container>
      )}
      <Footer />
    </>
  );
};

export default Songs;
