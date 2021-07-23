import { combineReducers } from 'redux';
import { deckReducer } from './deckReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  deckReducer,
  userReducer,
});
