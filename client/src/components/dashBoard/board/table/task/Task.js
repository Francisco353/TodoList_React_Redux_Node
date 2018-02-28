import React, {Component} from 'react';
import { connect } from "react-redux";

class Task extends Component {

  render(){
      return(
        <div className="container">
          <div className="row">
            <div className=" col-6 col-sm-6 col-md-6">
            {this.props.values.title}
            </div>
            <div className="cross_task col-2 col-sm-2 col-md-2" onClick={()=>{
              this.props.deleteTask(this.props.values._id);
            }}><strong>x</strong></div>
          </div>
        </div>
      )
  }
}

export default (Task);
