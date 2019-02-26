import ObjectId from 'bson-objectid';

import { connectDatabase } from '../db';

export const GET_BUDGET_BY_MONTH_YEAR = 'GET_BUDGET_BY_MONTH_YEAR';
export const ADD_EARNINGS_BY_MONTH_YEAR = 'ADD_EARNINGS_BY_MONTH_YEAR';

export function getBudgetByMonthYear(month, year) {
  return async (dispatch) => {
    await connectDatabase();

    const budget = await window.budgetCollection.findOne({month, year}).exec();
    let earnings = [];
    let expense = [];

    if (budget) {
      earnings = await budget.earnings_;
      expense = await budget.expense_;
    } else {
      window.budgetCollection.insert({
        month,
        year,
        earnings: [],
        expense: []
      })
    }

    dispatch({
      type: GET_BUDGET_BY_MONTH_YEAR,
      mbudget: {earnings, expense}
    });
  }
}

export function addEarnings(earnings) {
  let  { month, year, description, value } = earnings;

  return async (dispatch) => {
    await connectDatabase();

    const e = await window.earningsCollection.insert({
      name: ObjectId().str,
      description,
      value: +value
    });

    await window.budgetCollection.findOne({month, year}).update({
      $push: {
        earnings: e.name
      }
    });

    dispatch({
      type: ADD_EARNINGS_BY_MONTH_YEAR,
      earnings: e
    })
  }
}