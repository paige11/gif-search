import { searchForGifs } from '../apis/GiphyRequests';

export const SEARCH = 'search_gifs';
export const UPDATE_SEARCH_TERM = 'update_search_term';
export const ADD_FAVORITE = 'add_favorite';
export const REMOVE_FAVORITE = 'remove_favorite';

export const getGifsBySearchTerm = term => dispatch => {
  searchForGifs(term)
    .then(
      res => {
        dispatch(updateSearchResults(res.data.data));
      },
      err => console.log(err)
    );
}

export const updateSearchResults = results => {
  return {
    type: SEARCH,
    payload: results
  }
}

export const updateSearchTerm = term => {
  return {
    type: UPDATE_SEARCH_TERM,
    term
  }
}

export const makeFavorite = id => {
  return {
    type: ADD_FAVORITE,
    id
  }
}

export const removeFavorite = id => {
  return {
    type: REMOVE_FAVORITE,
    id
  }
}
