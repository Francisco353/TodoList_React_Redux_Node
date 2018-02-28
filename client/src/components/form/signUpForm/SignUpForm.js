import React, { Component } from "react";
import { connect } from "react-redux";
import signUpFormFields from "./signUpFormFields"
import { reduxForm } from "redux-form";
import {submitSignUpUser} from "../../../actions/index";
import Form from "../Form";
import {Button} from 'react-bootstrap';

class SignUpForm extends Component {

  render(){
    const {formValues} = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="form-div col-md-4" >
            <form>
              <Form fields={signUpFormFields} />
            </form>
            <Button bsStyle="primary" onClick={()=>{this.props.onConfirm(formValues.values)}}>Accept</ Button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    formValues: state.form.signUpForm
  };

}

function mapDispatchToProps(dispatch){

  return {
    onConfirm: (values) => {
      dispatch(submitSignUpUser(values));
    }
  }
}

SignUpForm = connect(mapStateToProps,mapDispatchToProps)(SignUpForm);
export default reduxForm({
  form: "signUpForm"
})(SignUpForm) ;
