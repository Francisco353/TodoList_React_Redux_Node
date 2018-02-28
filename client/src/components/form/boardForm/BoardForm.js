import React, { Component } from "react";
import { connect } from "react-redux";
import boardFormFields from "./boardFormFields";
import Form from "../Form";
import { reduxForm } from "redux-form";
import {createNewBoard,fetchBoards} from "../../../actions/index";
import Button from 'react-bootstrap/lib/Button';

class BoardForm extends Component {

  render(){
    const {userId,formValues} = this.props;

    return (
      <div className="color" id="newBoardForm-div">
         <form id="newboardform">
           <Form fields={boardFormFields}/>
         </form>
         <div >
           <Button id="acceptnewBoardForm" bsStyle="success" onClick={()=>{this.props.submitNewBoard(userId,formValues.values)}}>Accept</Button>
           <Button id="cancelnewBoardForm" bsStyle="danger" onClick={(e) =>{
             this.props.hideNewBoardForm(e)}}>
             Cancel
           </Button>
       </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: state.form.newBoardForm
  };
}

function mapDispatchToProps(dispatch){
  return {
    submitNewBoard: (userId,{title}) => {
      dispatch(createNewBoard(userId,title));
      dispatch(fetchBoards(userId));
    }
  }
}


BoardForm = connect(mapStateToProps,mapDispatchToProps)(BoardForm);
export default reduxForm({
  form: "newBoardForm"
})(BoardForm) ;
