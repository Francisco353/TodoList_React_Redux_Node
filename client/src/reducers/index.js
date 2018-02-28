import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import userReducer from "./userReducer";
import dashBoardReducer from "./dashBoardReducer";
import boardReducer from "./boardReducer";
import tableReducer from "./tableReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
  form: reduxForm,
  user: userReducer,
  boards: dashBoardReducer,
  board: boardReducer,
  tables: tableReducer,
  tasks: taskReducer
})
