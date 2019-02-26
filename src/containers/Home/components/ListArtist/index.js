import React, { Component } from 'react';
import { Image, ArtistName, ArtistWrapper } from './styled';

class ListArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuggestion: false,
            artists: []
        }
      }

    render() {
        const { artist } = this.props;
        return (
            <ArtistWrapper>
                <Image src={artist.image} /> 
                <ArtistName>
                    {artist.name}
                </ArtistName>
            </ArtistWrapper>
        )
    }
}

export default ListArtist;