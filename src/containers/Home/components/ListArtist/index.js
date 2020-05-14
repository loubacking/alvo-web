import React from 'react';
import { Link } from 'react-router-dom';
import { Image, ArtistName, ArtistWrapper } from './styled';

const ListArtist = ({ artist }) => {
    return (
        <ArtistWrapper>
            <Link to={{ pathname: '/artists', state: { artistId: artist._id } }}>
                <Image src={artist.image} />
                <ArtistName>
                    {artist.name}
                </ArtistName>
            </Link>
        </ArtistWrapper>
    )
}

export default ListArtist;