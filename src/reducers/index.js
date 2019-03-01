import { combineReducers } from 'redux';

import years from './year-reducer';
import mbudget from './mbudget-reducer';
import ybudget from './ybudget-reducer';

export default combineReducers({
  years,
  mbudget,
  ybudget
});