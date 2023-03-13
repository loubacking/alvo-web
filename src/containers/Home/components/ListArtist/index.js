import React from 'react';
import { Link } from 'react-router-dom';
import { Image, ArtistName, ArtistWrapper } from './styled';

const ListArtist = ({ artist }) => {
  return (
    <ArtistWrapper>
      <Link to={{ pathname: '/artists', state: { artistId: artist.id } }}>
        <Image src={artist.imageUrl} />
        <ArtistName>{artist.name}</ArtistName>
      </Link>
    </ArtistWrapper>
  );
};

export default ListArtist;
