import {combineReducers} from 'redux';
import favReducer from './favReducer';

export default combineReducers({
  fav: favReducer,
});
