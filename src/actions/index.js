import { searchArtist } from '../api/general';
import { SEARCH_ARTIST_REQUEST, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_FAILED } from '../reducers/types';

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

export default {
  searchArtistAction
};