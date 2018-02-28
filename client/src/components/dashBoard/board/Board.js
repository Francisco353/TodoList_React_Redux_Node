import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchTables } from "../../../actions";
import Table from './table/Table';

class Board extends Component {

  componentWillMount() {
    this.props.fetchTables(this.props.match.params.boardId);
  }

  renderTables(){
    const tables = this.props.tables.map((table, index) =>{
      return(
          <Table key={index} tableValues={table} />
      )
    });
    return tables;
  }

  render(){
    if(this.props.tables.length > 0) {
      return(
        <div id="tables-container" className="container">
          <div className="row">
            {this.renderTables()}
          </div>
        </div>
      )
    }else{
      return(
        <div></div>
      )
    }
  }
}

function mapStateToProps  ({ tables,user }) {
  return {
    tables,
    user
  };
}

export default connect(mapStateToProps,{fetchTables})(Board);
