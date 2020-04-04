import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchArtistAction, searchSongAction } from '../../../../actions';
import { InputGroup, SearchInput, IconWrapper, SuggestionBox, ArtistTitle, LineBreak, TextTip, SongTitle, ArtistWrapper, SongWrapper } from './styled';
import { FaSearch } from 'react-icons/fa';
import ListArtist from '../ListArtist';
import ListSong from '../ListSong';

const SearchForm = () => {
    const dispatch = useDispatch();
    const artists = useSelector(state => state.unique.artists);
    const songs = useSelector(state => state.unique.songs);

    const [isSuggestion, setIsSuggestion] = useState(false);

    const toggleCoolness = (data) => {
        dispatch(searchArtistAction(data));
        dispatch(searchSongAction(data));

        if (data.length > 0) {
            setIsSuggestion(true);
        } else {
            setIsSuggestion(false);
        }
    }

    return (
        <Fragment>
            <InputGroup>
                <IconWrapper>
                    <FaSearch />
                </IconWrapper>
                <SearchInput isSuggestion={isSuggestion} onChange={event => toggleCoolness(event.target.value)} placeholder='O que você quer tocar hoje?' />
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

export default SearchForm;