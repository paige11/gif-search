import { searchForGifs } from '../apis/GiphyRequests';

export const SEARCH_GIFS = 'search_gifs';
export const FAVORITE_GIF = 'favorite_gifs';

export const getGifs = searchTerm => {
  const res = searchForGifs(searchTerm);

  return {
    type: SEARCH_GIFS,
    payload: res
  };
}
