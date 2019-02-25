import { SEARCH_ARTIST_REQUEST, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_FAILED } from './types';

export default function reducer(state = {}, action) {
    // switch between the action type
    switch (action.type) {
      case SEARCH_ARTIST_REQUEST:
        return {
          ...state,
          isSearching: true
        };
      case SEARCH_ARTIST_SUCCESS:
        return {
          ...state,
          isSearching: false,
          data: action
        };
      case SEARCH_ARTIST_FAILED:
        return {
          ...state,
          isSearching: true,
          error: action.error
        }
      default:
        return state;
    }
  }