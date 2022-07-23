import { searchArtist, searchSong } from '../api/general';
import {
SEARCH_ARTIST_REQUEST,
SEARCH_ARTIST_SUCCESS,
SEARCH_ARTIST_FAILED,
SEARCH_SONG_REQUEST,
SEARCH_SONG_SUCCESS,
SEARCH_SONG_FAILED,
AUTH_TOKEN
} from '../reducers/types';

// Search Artist

const searchArtistRequest = () => ({
    type: SEARCH_ARTIST_REQUEST
});

const searchArtistSuccess = (artists: any) => ({
    type: SEARCH_ARTIST_SUCCESS,
    artists
});

const searchArtistFailed = (error: any) => ({
    type: SEARCH_ARTIST_FAILED,
    error
});

export const searchArtistAction = (data: any) => async (dispatch: any) => {
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

const searchSongSuccess = (songs: any) => ({
    type: SEARCH_SONG_SUCCESS,
    songs
});

const searchSongFailed = (error: any) => ({
    type: SEARCH_SONG_FAILED,
    error
});

export const searchSongAction = (data: any) => async (dispatch: any) => {
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

// AUTHTOKEN
const authTokenType = (authToken: string) => ({
    type: AUTH_TOKEN,
    authToken
});

export const saveAuthToken = (authToken: string) => async (dispatch: any) => {
    try {
        dispatch(authTokenType(authToken));
    } catch (error) {
        dispatch(searchSongFailed(error));
        return { error };
    }
};