import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import userReducer from './user';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: userReducer,
  settings: settingsReducer,
});

export default rootReducer;
