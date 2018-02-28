import { FETCH_TASKS,FETCH_TASK,DELETE_TASK } from '../actions/types';

export default function( state = [], action) {
  switch (action.type) {
    case FETCH_TASKS:
      return (state.concat(action.payload));
    case FETCH_TASK:
      return (state.concat(action.payload));
    case DELETE_TASK:
      return (state.filter((task)=> {
        return task._id !== action.payload;
      }));
    default:
      return state;
  }
}
