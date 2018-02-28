import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchBoards } from "../../actions"
import { reduxForm } from "redux-form";
import BoardForm from '../form/boardForm/BoardForm';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/lib/Button';

class DashBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      showNewBoardForm: false
    }
    this.hideNewBoardForm = this.hideNewBoardForm.bind(this)
  }
  hideNewBoardForm(e) {
     e.preventDefault();
     this.setState({
       showNewBoardForm: false
     });
     e.stopPropagation();
   }

  componentDidMount() {
     this.props.fetchBoards(this.props.user._id);
  }

  renderHeader() {
      return (
        <div>
          Header
        </div>
      );
  }

  renderBoards() {
    const boards = this.props.boards.map((board) =>
      <div key={board._id} className="card-div">
        <Link className="link-div" to={"/dashBoard/board/"+board._id} >  {board.title} </Link>
      </div>
      );
      return (<div>{boards}</div>)
  }

  renderNewBoardDiv() {
    if(!this.state.showNewBoardForm){
      return (
         <Button id="newBoardButton" bsStyle="primary" onClick= {(e)=>{
          this.setState({
            showNewBoardForm : true
          });
        }
        }>
          Add New Board
        </Button>
      )
    }else{
      return (
        <div>
        <BoardForm userId={this.props.user._id} hideNewBoardForm={this.hideNewBoardForm} />
      </div>);
    }
  }

  render(){
    return(
      <div>
        {this.renderBoards()}
        {this.renderNewBoardDiv()}

      </div>
    )
  }
}

function mapStateToProps  ({ user,boards }) {
  return {
    user,
    boards
  };
}



export default connect(mapStateToProps,{fetchBoards})(DashBoard);
