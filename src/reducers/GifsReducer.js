import {
  SEARCH,
  FAVORITE
} from '../actions/GifsActions';

const defaultState = {
  favorites: {},
  searchResults: []
};

const makeGifDisplayObjects = data => {
  return data.map(gif => {
    return {
      id: gif.id,
      fixedWidthUrl: gif.images.fixed_width.url,
      description: gif.title
    }
  });
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case SEARCH:
      return { ...state, searchResults: makeGifDisplayObjects(action.payload.data) }
    case FAVORITE:
      return state;
    default:
      return state;
  }
};
