import React, { Component } from 'react';
import { SongName, SongWrapper, ArtistName } from './styled';

class ListSong extends Component {

    render() {
        const { song } = this.props;
        return (
            <SongWrapper>
                <SongName>
                    {song.name}
                </SongName>
                <ArtistName>
                    {song.artistName}
                </ArtistName>
            </SongWrapper>
        )
    }
}

export default ListSong;