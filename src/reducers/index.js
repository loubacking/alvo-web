import {
  SEARCH_ARTIST_REQUEST,
  SEARCH_ARTIST_SUCCESS,
  SEARCH_ARTIST_FAILED,
  SEARCH_SONG_REQUEST,
  SEARCH_SONG_SUCCESS,
  SEARCH_SONG_FAILED,
  AUTH_TOKEN,
  LOGIN_SUCCESSFULL
} from './types';

export default function reducer(state = {}, action) {
  // switch between the action type
  switch (action.type) {
    case SEARCH_ARTIST_REQUEST:
      return {
        ...state,
        isSearching: true
      };
    case LOGIN_SUCCESSFULL:
      return {
        ...state,
        authToken: action.authToken,
        userInfo: action.userInfo
      };
    case AUTH_TOKEN:
      return {
        ...state,
        authToken: action.authToken
      };
    case SEARCH_ARTIST_SUCCESS:
      return {
        ...state,
        isSearching: false,
        artists: action.artists
      };
    case SEARCH_ARTIST_FAILED:
      return {
        ...state,
        isSearching: true,
        error: action.error
      };
    case SEARCH_SONG_REQUEST:
      return {
        ...state,
        isSearching: true
      };
    case SEARCH_SONG_SUCCESS:
      return {
        ...state,
        isSearching: false,
        songs: action.songs
      };
    case SEARCH_SONG_FAILED:
      return {
        ...state,
        isSearching: true,
        error: action.error
      };
    default:
      return state;
  }
}
