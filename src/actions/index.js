import { searchArtist, searchSong } from '../api/general';
import 
{ SEARCH_ARTIST_REQUEST,
  SEARCH_ARTIST_SUCCESS,
  SEARCH_ARTIST_FAILED,
  SEARCH_SONG_REQUEST,
  SEARCH_SONG_SUCCESS,
  SEARCH_SONG_FAILED
 } from '../reducers/types';

// Search Artist

const searchArtistRequest = () => ({
    type: SEARCH_ARTIST_REQUEST
});

const searchArtistSuccess = (artists) => ({
    type: SEARCH_ARTIST_SUCCESS,
    artists
});

const searchArtistFailed = (error) => ({
    type: SEARCH_ARTIST_FAILED,
    error
});

export const searchArtistAction = (data) => async (dispatch) => {
    try {
        dispatch(searchArtistRequest());
        const response = await searchArtist(data);
        dispatch(searchArtistSuccess(response.data));
        return response.data;
    } catch (error) {
        dispatch(searchArtistFailed(error));
        return { error };
    }
};

// Search Songs

const searchSongRequest = () => ({
    type: SEARCH_SONG_REQUEST
});

const searchSongSuccess = (songs) => ({
    type: SEARCH_SONG_SUCCESS,
    songs
});

const searchSongFailed = (error) => ({
    type: SEARCH_SONG_FAILED,
    error
});

export const searchSongAction = (data) => async (dispatch) => {
    try {
        dispatch(searchSongRequest());
        const response = await searchSong(data);
        dispatch(searchSongSuccess(response.data));
        return response.data;
    } catch (error) {
        dispatch(searchSongFailed(error));
        return { error };
    }
};
