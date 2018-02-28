import { FETCH_BOARDS, ADD_BOARD } from '../actions/types';

export default function( state = [], action) {
  switch (action.type) {
    case FETCH_BOARDS:
      return action.payload;
    default:
      return state;
  }
}
