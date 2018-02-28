import React, { Component } from "react";
import { connect } from "react-redux";
import signInFormFields from "./signInFormFields";
import Form from "../Form";
import { reduxForm } from "redux-form";
import { withRouter } from 'react-router-dom';
import {submitSignInUser} from "../../../actions/index";
import {Button} from 'react-bootstrap';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';


class SignInForm extends Component {
  render(){
    const {formValues,history} = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="form-div col-md-4" >
            <form>
              <Form fields={signInFormFields}/>
            </form>
            <Button bsStyle="primary" onClick={()=>{this.props.signIn(formValues.values,history)}}>Accept</ Button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: state.form.signInForm
  };
}

function mapDispatchToProps(dispatch){
  return {
    signIn: (values,history) => {
      dispatch(submitSignInUser(values,history));
    }
  }
}

SignInForm = connect(mapStateToProps,mapDispatchToProps)(withRouter(SignInForm));
export default reduxForm({
  form: "signInForm"
})(SignInForm) ;
