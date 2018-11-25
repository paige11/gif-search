import { searchForGifs } from '../apis/GiphyRequests';

export const SEARCH = 'search_gifs';
export const FAVORITE = 'favorite_gifs';

export const getGifs = term => dispatch => {
  let gifs = searchForGifs(term)
    .then(
      res => {
        dispatch({
          type: SEARCH,
          payload: res.data,
          term
        });
      },
      err => console.log(err)
    );
}
