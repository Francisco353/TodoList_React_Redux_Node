import axios from "axios";
import { FETCH_TASK,FETCH_TABLES,DELETE_TASK,FETCH_TASKS, FETCH_USER, FETCH_BOARDS, FETCH_BOARD, ADD_BOARD} from '../actions/types';

//USERS
export const submitSignUpUser = (values) => async dispatch => {
  const res = await axios.post("/api/createUser",values);
  dispatch({type:FETCH_USER, payload:res.data});
};

export const submitSignInUser = (values,history) => async dispatch => {
  const {username,password} = values;
  var res = await axios.get("/api/findUser/"+username+"/"+password);
  if(res.data.length===1 && res.data[0].username===username && res.data[0].password===password){
    dispatch({type:FETCH_USER, payload:res.data[0]});
    history.push("/dashBoard")
  }
};

//BOARDS
export const createNewBoard = (userId,title) => async dispatch => {
   const values = {userId,title};
   const res = await axios.post("/api/boards",values);
};

export const fetchBoards = (userId) => async dispatch => {
   const res = await axios.get("/api/boards/"+userId);
   dispatch({type:FETCH_BOARDS, payload:res.data});
};

export const fetchBoard = (board) =>{
  return{type:FETCH_BOARD, payload:board};
}


//TABLES
export const fetchTables = (boardId) => async dispatch => {
   const res = await axios.get("/api/tables/"+boardId);
   dispatch({type:FETCH_TABLES, payload:res.data});
};


//TASKS

export const createNewTask = (tableId,title) => async dispatch => {
  const values = {tableId,title};
  const res = await axios.post("/api/tasks",values);
  dispatch({type:FETCH_TASK, payload:res.data});

};

export const fetchTasks = (tableId) => async dispatch => {
   const res = await axios.get("/api/tasks/"+tableId);
   dispatch({type:FETCH_TASKS, payload:res.data});
};

export const deleteTask = (taskId) => async dispatch => {
  console.log(taskId);
  const res = await axios.delete("/api/tasks/"+taskId);
  console.log(res.data);
  dispatch({type:DELETE_TASK, payload:taskId});
};
