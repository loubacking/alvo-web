import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchArtistAction, searchSongAction } from '../../../../actions';
import {
  InputGroup,
  SearchInput,
  IconWrapper,
  SuggestionBox,
  ArtistTitle,
  LineBreak,
  TextTip,
  SongTitle,
  ArtistWrapper,
  SongWrapper,
  SkeletonWrapper,
  SkeletonName,
} from './styled';
import { FaSearch } from 'react-icons/fa';
import ListArtist from '../ListArtist';
import ListSong from '../ListSong';
import Skeleton from 'react-loading-skeleton';
import debounce from 'lodash.debounce';

const SearchForm = () => {
  const dispatch = useDispatch();
  const { artists, songs, isSearching } = useSelector((state) => state.unique);

  const [isSuggestion, setIsSuggestion] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

  const updateQuery = () => {
    toggleCoolness(searchQuery);
  };

  const delayedQuery = useCallback(debounce(updateQuery, 500), [searchQuery]);

  const onChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    delayedQuery();
    return delayedQuery.cancel;
  }, [searchQuery, delayedQuery]);

  const toggleCoolness = (data) => {
    dispatch(searchArtistAction(data));
    dispatch(searchSongAction(data));

    setIsSuggestion(data.length > 0);
  };

  return (
    <>
      <InputGroup>
        <IconWrapper>
          <FaSearch />
        </IconWrapper>
        <SearchInput
          isSuggestion={isSuggestion}
          onChange={onChange}
          placeholder="O que você quer tocar hoje?"
          value={searchQuery}
        />
        {isSuggestion && (
          <SuggestionBox>
            <LineBreak />
            <ArtistWrapper>
              <ArtistTitle>Artistas</ArtistTitle>
              {artists && artists.length !== 0 ? (
                artists.slice(0, 3).map((artist) => <ListArtist key={artist._id} artist={artist} />)
              ) : isSearching ? (
                <SkeletonWrapper>
                  <Skeleton circle width={40} height={40} />
                  <SkeletonName>
                    <Skeleton width={120} height={16} style={{ marginLeft: 52 }} />
                  </SkeletonName>
                </SkeletonWrapper>
              ) : (
                <TextTip>Artista não encontrado</TextTip>
              )}
            </ArtistWrapper>
            <SongWrapper>
              <SongTitle>Músicas</SongTitle>
              {songs && songs.length !== 0 ? (
                songs.slice(0, 3).map((song) => <ListSong key={song.id} song={song} />)
              ) : isSearching ? (
                <SkeletonWrapper>
                  <SkeletonName>
                    <Skeleton width={172} height={16} style={{ marginTop: 36 }} />
                  </SkeletonName>
                </SkeletonWrapper>
              ) : (
                <TextTip style={{ top: -40 }}>Música não encontrada</TextTip>
              )}
            </SongWrapper>
          </SuggestionBox>
        )}
      </InputGroup>
    </>
  );
};

export default SearchForm;
