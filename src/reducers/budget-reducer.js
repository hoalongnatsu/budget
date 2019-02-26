import { GET_BUDGET_BY_MONTH_YEAR, ADD_EARNINGS_BY_MONTH_YEAR } from '../actions/budget';

export function mbudget(state = {}, action) {
  switch (action.type) {
    case GET_BUDGET_BY_MONTH_YEAR:
      return action.mbudget;
    case ADD_EARNINGS_BY_MONTH_YEAR:
      const expense = [...state.expense];
      const earnings = [...state.earnings];
      earnings.push(action.earnings);
      return {earnings, expense};
    default:
      return state;
  }
}