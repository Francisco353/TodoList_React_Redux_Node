import React, { Component } from "react";
import { connect } from "react-redux";
import taskFormFields from "./taskFormFields";
import Form from "../Form";
import { reduxForm } from "redux-form";
import {createNewTask,fetchTables} from "../../../actions/index";
import {Button} from 'react-bootstrap';

class TaskForm extends Component {
  render(){
    const {boardID,tableID,formValues} = this.props;
    return (
      <div key="taskform" className="task-form">
         <form>
           <Form fields={taskFormFields}/>
         </form>

         <Button bsStyle="primary" onClick={()=>{
           this.props.submitNewTask(tableID,formValues.values)
           this.props.updateTables(boardID)
         }}>Accept</Button>
         <Button bsStyle="danger" onClick={(e) =>{
           this.props.hideNewTaskForm(e)}}>
       Cancel
       </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: state.form.newTaskForm
  };
}

function mapDispatchToProps(dispatch){
  return {
    submitNewTask: (tableID,{title}) => {
      if(title.length<=5){
        dispatch(createNewTask(tableID,title));
      }else{
        alert("Max 5 characters");
      }
    },
    updateTables: (boardID) => {
      dispatch(fetchTables(boardID));
    }
  }
}


TaskForm = connect(mapStateToProps,mapDispatchToProps)(TaskForm);
export default reduxForm({
  form: "newTaskForm"
})(TaskForm) ;
