import { searchForGifs, getGifsByIds } from '../apis/GiphyRequests';

export const SEARCH = 'search_gifs';
export const ADD_FAVORITE = 'add_favorite';
export const GET_FAVORITES = 'get_favorites';
export const REMOVE_FAVORITE = 'remove_favorite';

export const getGifsBySearchTerm = term => dispatch => {
  let gifs = searchForGifs(term)
    .then(
      res => {
        dispatch({
          type: SEARCH,
          payload: res.data
        });
      },
      err => console.log(err)
    );
}

export const makeFavorite = id => {
  return {
    type: ADD_FAVORITE,
    payload: id
  }
}

export const removeFavorite = id => {
  return {
    type: REMOVE_FAVORITE,
    payload: id
  }
}

export const retrieveGifsByIds = ids => dispatch => {
  let gifs = getGifsByIds(ids)
    .then(
      res => {

      },
      err => console.log(err)
    )
}
