import { GET_ALL_YEAR, ADD_YEAR } from '../actions/year';

export default function years(state = [], action) {
  switch (action.type) {
    case GET_ALL_YEAR:
      const years = action.years.map(doc => doc.get('name'));
      return years;
    case ADD_YEAR:
      return [...state, action.year];
    default:
      return state;
  }
}