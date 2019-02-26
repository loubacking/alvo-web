import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { searchArtistAction, searchSongAction } from '../../../../actions';
import { InputGroup, SearchInput, IconWrapper, SuggestionBox, ArtistTitle, LineBreak, TextTip, SongTitle, ArtistWrapper, SongWrapper } from './styled';
import { FaSearch } from 'react-icons/fa';
import ListArtist from '../ListArtist';
import ListSong from '../ListSong';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuggestion: false,
            artists: [],
            songs: []
        }
      }

      componentWillReceiveProps = (nextProps) => {
          console.log(nextProps)
          const { artists, songs } = nextProps;
          if (artists !== this.state) {
            this.setState({
                artists: artists,
                songs: songs
            })
          }
      }

      toggleCoolness = (data) => {
          const { searchArtists, searchSongs } = this.props;

          searchArtists(data);
          searchSongs(data);

          if (data.length > 0) {
            this.setState({ isSuggestion: true })
          } else {
            this.setState({ isSuggestion: false })
          }
      }

    render() {
        const { isSuggestion } = this.state;
        const { artists } = this.state;
        const { songs } = this.state;
        console.log(artists);
        return (
            <Fragment>
                <InputGroup>
                    <IconWrapper>
                        <FaSearch />
                    </IconWrapper>
                    <SearchInput isSuggestion={isSuggestion} onChange={event => this.toggleCoolness(event.target.value)} placeholder='O que você quer tocar hoje?' />
                    {(isSuggestion && artists && songs) && <SuggestionBox>
                        <LineBreak />
                        <ArtistWrapper>
                        <ArtistTitle>Artistas</ArtistTitle>
                        {(artists.length !== 0) ? artists.slice(0, 3).map((artist) => {
                          return (
                              <ListArtist key={artist.id} artist={artist} />
                          )
                        }) : <TextTip>Artista não encontrado </TextTip>}
                        </ArtistWrapper>
                        <SongWrapper>
                        <SongTitle>Músicas</SongTitle>
                        {(songs.length !== 0) ? songs.slice(0, 3).map((song) => {
                          return (
                              <ListSong key={song.id} song={song} />
                          )
                        }) : <TextTip style={{ top: -40 }}>Músicas não encontrada </TextTip>}
                        </SongWrapper>
                    </SuggestionBox>}   
                </InputGroup>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    artists: state.unique.artists,
    songs: state.unique.songs
})

const mapDispatchToProps = (dispatch) => ({
    searchArtists: (keyword) => dispatch(searchArtistAction(keyword)),
    searchSongs: (keyword) => dispatch(searchSongAction(keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);