import { searchForGifs } from '../apis/GiphyRequests';

export const SEARCH = 'search_gifs';
export const FAVORITE = 'favorite_gifs';

export const getGifs = term => {
  let gifs = searchForGifs(term);

  return {
    type: SEARCH,
    payload: gifs,
    term
  };
}
