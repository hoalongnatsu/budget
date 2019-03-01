import { GET_BUDGET_BY_MONTH_YEAR, ADD_EARNINGS_BY_MONTH_YEAR, ADD_EXPENSE_BY_MONTH_YEAR } from '../actions/budget';

export default function mbudget(state = {}, action) {
  let expense;
  let earnings;

  switch (action.type) {
    case GET_BUDGET_BY_MONTH_YEAR:
      return action.mbudget;

    case ADD_EARNINGS_BY_MONTH_YEAR:
      expense = [...state.expense];
      earnings = [...state.earnings];
      earnings.push(action.earnings);
      return {earnings, expense};
      
    case ADD_EXPENSE_BY_MONTH_YEAR:
      expense = [...state.expense];
      earnings = [...state.earnings];
      expense.push(action.expense);
      return {earnings, expense};
      
    default:
      return state;
  }
}