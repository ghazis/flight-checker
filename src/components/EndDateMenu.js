import React, { Component } from 'react';
import { DatePicker } from 'material-ui';
import { connect } from 'react-redux';

import { setEndDate } from '../actions/actions.js';

class EndDateMenu extends Component {

  handleChange = (event, date) => {
    this.props.setEndDate(date);
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
      end_date: state.appState.end_date
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setEndDate: (end_date) => dispatch(setEndDate(end_date))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndDateMenu);