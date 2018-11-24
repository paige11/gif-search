import { combineReducers } from 'redux';
import GifsReducer from './GifsReducer';

const rootReducer = combineReducers({
  gifs: GifsReducer
});

export default rootReducer;
