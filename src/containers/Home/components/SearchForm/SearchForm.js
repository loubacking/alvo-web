import React, { Component, Fragment } from 'react';
import { InputGroup, SearchInput, IconWrapper, SuggestionBox, ArtistTitle, LineBreak, Image, ArtistName } from './styled';
import { FaSearch } from 'react-icons/fa';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuggestion: false
        }
      }

      toggleCoolness = (data) => {
          if (data.length > 0) {
            this.setState({ isSuggestion: true })
          } else {
            this.setState({ isSuggestion: false })
          }
      }

    render() {
        const { isSuggestion } = this.state;
        return (
            <Fragment>
                <InputGroup>
                    <IconWrapper>
                        <FaSearch />
                    </IconWrapper>
                    <SearchInput isSuggestion={isSuggestion} onChange={event => this.toggleCoolness(event.target.value)} placeholder='O que você quer tocar hoje?' />
                    {isSuggestion && <SuggestionBox>
                        <LineBreak />
                        <ArtistTitle>Artistas</ArtistTitle>
                        <Image /> <ArtistName>Marcos Almeida</ArtistName>
                    </SuggestionBox>}   
                </InputGroup>
            </Fragment>
        )
    }
}

export default SearchForm;