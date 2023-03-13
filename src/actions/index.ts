import { searchArtist, searchSong } from '../api/general';
import jwt from 'jwt-decode';
import {
SEARCH_ARTIST_REQUEST,
SEARCH_ARTIST_SUCCESS,
SEARCH_ARTIST_FAILED,
SEARCH_SONG_REQUEST,
SEARCH_SONG_SUCCESS,
SEARCH_SONG_FAILED,
AUTH_TOKEN,
LOGIN_SUCCESSFULL
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

// LOGIN

const getLoginSuccessfullAction = (authToken: string, userInfo?: { email: string, fullName: string } | null) => ({
    type: LOGIN_SUCCESSFULL,
    authToken,
    userInfo
})

export const saveTokenAndUserInfo = (authToken: string) => async (dispatch: any) => {
    try {
        let userInfo;
        if(authToken != ''){
            userInfo = jwt(authToken) as {email: string, fullName: string};
        }
        dispatch(getLoginSuccessfullAction(authToken, userInfo));
    } catch (error) {
        return { error };
    }
};