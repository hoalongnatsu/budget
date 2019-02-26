import { combineReducers } from 'redux';

import years from './year-reducer';
import { mbudget } from './budget-reducer';

export default combineReducers({
  years,
  mbudget
});