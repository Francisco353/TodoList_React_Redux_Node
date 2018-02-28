import { FETCH_TABLES } from '../actions/types';

export default function( state = [], action) {
  switch (action.type) {
    case FETCH_TABLES:
      return action.payload;
    default:
      return state;
  }
}
