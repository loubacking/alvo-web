import React from 'react';
import { Link } from 'react-router-dom';
import { SongName, SongWrapper, ArtistName } from './styled';

const ListSong = ({ song }) => {
    return (
        <SongWrapper>
            <Link to={{ pathname: '/songs', state: { songId: song._id } }}>
                <SongName>
                    {song.name}
                </SongName>
                <ArtistName>
                    {song.artistName}
                </ArtistName>
            </Link>
        </SongWrapper>
    )
}

export default ListSong;