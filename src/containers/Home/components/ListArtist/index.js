import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to={{ pathname: '/artists', state: { artistId: artist._id} }}>
                <Image src={artist.image} />
                <ArtistName>
                    {artist.name}
                </ArtistName>
                </Link>
            </ArtistWrapper>
        )
    }
}

export default ListArtist;