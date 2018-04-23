import React, { Component } from 'react';
import { DatePicker } from 'material-ui';
import { connect } from 'react-redux';

import { setStartDate } from '../actions/actions.js';

class StartDateMenu extends Component {

  handleChange = (event, date) => {
    this.props.setStartDate(date);
  }

  render() {
    return (
      <div>
        <div style={{paddingRight:20, paddingTop:23}}><DatePicker autoOk={true} onChange={this.handleChange} hintText={this.props.placeholder} container="inline" textFieldStyle={{width:150}} /></div>
      </div>
    )}

}

const mapStateToProps = (state) => {
    return {
      start_date: state.appState.start_date
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate: (start_date) => dispatch(setStartDate(start_date))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartDateMenu);