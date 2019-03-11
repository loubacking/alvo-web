import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SongName, SongWrapper, ArtistName } from './styled';

class ListSong extends Component {

    render() {
        const { song } = this.props;
        return (
            <SongWrapper>
                <Link to={{ pathname: '/songs', state: { songId: song._id} }}>
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
}

export default ListSong;