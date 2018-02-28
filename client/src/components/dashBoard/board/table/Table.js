import React, {Component} from 'react';
import { connect } from "react-redux";
import Task from './task/Task';
import { reduxForm } from "redux-form";
import TaskForm from '../../../form/taskForm/TaskForm';
import { fetchTasks,deleteTask} from "../../../../actions";
import Button from 'react-bootstrap/lib/Button';

class Table extends Component {

  constructor(props){
    super(props)
    this.state = {
      showNewTaskForm: false,
    }
    this.hideNewTaskForm = this.hideNewTaskForm.bind(this);
  }

  componentWillMount() {
    this.props.fetchTasks(this.props.tableValues._id);
  }

  findTasks(){
    if(this.props.tasks && this.props.tasks.length > 0){
      const res =  this.props.tasks.filter((task) =>{
        return (task._table === this.props.tableValues._id);
      });
      return res;
    }
    return undefined;
  };

  renderTasks(){
    const tasks = this.findTasks();

    var tasksHtml = "";

    if(tasks && tasks.length>0){
       tasksHtml = tasks.map((task, index) =>{
        return(
          <Task key={index} deleteTask={this.props.deleteTask} values={task} />
        )
      });
      if(tasksHtml.length<=11){
        tasksHtml = tasksHtml.concat(this.renderNewTaskDiv());
      }
      return tasksHtml;
    }
      return this.renderNewTaskDiv()

  };

  renderNewTaskDiv() {
    if(!this.state.showNewTaskForm){
      return (
         <Button  key="button" bsStyle="primary" onClick= {(e)=>{
          this.setState({
            showNewTaskForm : true
          });
          e.stopPropagation();
        }
        }>
          Add New Task
        </Button>
      )
    }else{
      return (
        <div key="taskform">
        <TaskForm boardID={this.props.tableValues._board} tableID={this.props.tableValues._id} hideNewTaskForm={this.hideNewTaskForm} />
      </div>);
    }
  }

  hideNewTaskForm(e) {
     e.preventDefault();
     this.setState({
       showNewTaskForm: false
     });
     e.stopPropagation();
   }

  render(){
      return(
        <div className="col-3 col-sm-3 col-md-3 table-div" >
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                {this.renderTasks()}
              </div>
            </div>
          </div>
        </div>
      );
  }
}

function mapStateToProps  ({ tasks }) {
  return {
    tasks
  };
}



export default connect(mapStateToProps,{fetchTasks,deleteTask})(Table);
