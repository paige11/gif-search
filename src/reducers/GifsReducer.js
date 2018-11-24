import {
  SEARCH_GIFS,
  FAVORITE_GIF
} from '../actions/GifsActions';

const defaultState = {
  recentSearchTerms: [],
  favorites: {}
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case SEARCH_GIFS:
      return { ...state };
    case FAVORITE_GIF:
      return { ...state };
    default:
      return state;
  }
};
