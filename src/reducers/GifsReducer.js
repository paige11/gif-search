import { makeGifDisplayObjects } from '../utils/GifDisplayFunctions';
import {
  SEARCH,
  UPDATE_SEARCH_TERM,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/GifsActions';

const defaultState = {
  searchTerm: '',
  searchResults: [],
  favoritesIds: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchResults: makeGifDisplayObjects(action.payload)
      }
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.term }
    case ADD_FAVORITE:
      if (state.favoritesIds.indexOf(action.id) === -1) {
        return {
          ...state,
          favoritesIds: [ ...state.favoritesIds, action.id ]
        }
      }
      return state;
    case REMOVE_FAVORITE:
      return {
        ...state,
        favoritesIds: state.favoritesIds.filter(id => id !== action.id)
      }
    default:
      return state;
  }
};
