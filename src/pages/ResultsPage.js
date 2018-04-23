import React, { Component } from 'react';
import { connect } from 'react-redux';

import ap from '../images/ap.png';
import ResultsTable from '../components/ResultsTable.js';

class ResultsPage extends Component {

  render() {

    var table_items = [];
    for (var key in this.props.results) {
      var flight_info = this.props.results[key];
      table_items.push(flight_info);
    }

    return (
      <div>
        <div style={{textAlign: 'center', paddingTop:80}}><img src={ap} width="300" height="215" alt=""></img></div>
        <div style={{textAlign: 'center', paddingLeft:20, paddingRight:20}}>
          <ResultsTable data={table_items}/>
        </div>
      </div>
    )}
}

const mapStateToProps = (state) => {
    return {
      results: state.appState.results
    };
};


export default connect(mapStateToProps)(ResultsPage);