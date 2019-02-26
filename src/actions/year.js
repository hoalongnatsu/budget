import { connectDatabase } from '../db';

export const GET_ALL_YEAR = 'GET_ALL_YEAR';
export const ADD_YEAR = 'ADD_YEAR';

export function getYears() {
  return async (dispatch) => {
    await connectDatabase();

    const years = await window.yearCollection.find().exec();

    dispatch({
      type: GET_ALL_YEAR,
      years
    });
  }
}

export function addYear(year) {

  return async (dispatch) => {
    const { name } = await window.yearCollection.insert({name: year});

    dispatch({
      type: ADD_YEAR,
      year: name
    });
  }
}