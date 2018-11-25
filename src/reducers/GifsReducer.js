import {
  SEARCH,
  ADD_FAVORITE,
  GET_FAVORITES,
  REMOVE_FAVORITE
} from '../actions/GifsActions';

const defaultState = {
  favoritesIds: [],
  searchResults: [],
  favoriteGifs: []
};

const makeGifDisplayObjects = data => {
  return data.map(gif => {
    return {
      id: gif.id,
      fixedWidthUrl: gif.images.fixed_width.url,
      description: gif.title,
      url: gif.images.original.url
    }
  });
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case SEARCH:
      return { ...state, searchResults: makeGifDisplayObjects(action.payload.data) }
    case ADD_FAVORITE:
      if (state.favoritesIds.indexOf(action.payload) === -1) {
        return { ...state, favoritesIds: [ ...state.favoritesIds, action.payload ] }
      }
      return state;
    case GET_FAVORITES:
      return { ...state, favoriteGifs: makeGifDisplayObjects(action.payload.data) }
    case REMOVE_FAVORITE:
      if (state.favoritesIds.indexOf(action.payload) !== -1) {
        return { ...state, favoritesIds: state.favoritesIds.filter(g => g !== action.payload) }
      }
      return state;
    default:
      return state;
  }
};
