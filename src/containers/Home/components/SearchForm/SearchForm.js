import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { searchArtistAction } from '../../../../actions';
import { InputGroup, SearchInput, IconWrapper, SuggestionBox, ArtistTitle, LineBreak, Image, ArtistName } from './styled';
import { FaSearch } from 'react-icons/fa';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuggestion: false,
            artists: []
        }
      }

      componentWillReceiveProps = (nextProps) => {
          const { artists } = nextProps;
          if (artists !== this.state) {
            this.setState({
                artists: artists
            })
          }
      }

      toggleCoolness = (data) => {
          const { searchArtists } = this.props;

        searchArtists(data);

          if (data.length > 0) {
            this.setState({ isSuggestion: true })
          } else {
            this.setState({ isSuggestion: false })
          }
      }

    render() {
        const { isSuggestion } = this.state;
        const { artists } = this.state;
        return (
            <Fragment>
                <InputGroup>
                    <IconWrapper>
                        <FaSearch />
                    </IconWrapper>
                    <SearchInput isSuggestion={isSuggestion} onChange={event => this.toggleCoolness(event.target.value)} placeholder='O que você quer tocar hoje?' />
                    {(isSuggestion && artists) && <SuggestionBox>
                        <LineBreak />
                        <ArtistTitle>Artistas</ArtistTitle>
                        <Image /> <ArtistName>{}</ArtistName>
                        { artists && console.log(artists) }
                    </SuggestionBox>}   
                </InputGroup>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    artists: state.unique.data
})

const mapDispatchToProps = (dispatch) => ({
    searchArtists: (keyword) => dispatch(searchArtistAction(keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);