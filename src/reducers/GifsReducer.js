import {
  SEARCH,
  FAVORITE
} from '../actions/GifsActions';

const defaultState = {
  recentSearchTerms: [],
  favorites: {}
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case SEARCH:
      return [];
    case FAVORITE:
      return { ...state };
    default:
      return state;
  }
};
