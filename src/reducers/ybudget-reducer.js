import { GET_BUDGET_BY_YEAR } from '../actions/budget';

export default function mbudget(state = [], action) {
  switch (action.type) {
    case GET_BUDGET_BY_YEAR:
      return action.ybudget;
    default:
      return state;
  }
}