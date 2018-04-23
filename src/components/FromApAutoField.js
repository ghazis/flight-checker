import React, { Component } from 'react';
import { AutoComplete } from 'material-ui';
import { connect } from 'react-redux';

import { setFromApCode } from '../actions/actions.js';

class FromApAutoField extends Component {

  handleChange = (value) => {
    var ap_code = value.split(': ')[1];
    this.props.setFromApCode(ap_code);
  }

  render() {

    var menu_items = [];
    for (const [key, value] of Object.entries(this.props.ap_code_options)) {
      menu_items.push(key+": "+value);
    }

    return (
       <div style={{paddingRight:20}}>
       <AutoComplete floatingLabelText={this.props.placeholder} hintText="Enter City or Airport" onNewRequest={this.handleChange} dataSource={menu_items} filter={AutoComplete.caseInsensitiveFilter} textFieldStyle={{width:160}} style={{width:160}} listStyle={{width:400}} maxSearchResults={10}/>
       </div>
    )}
}

const mapStateToProps = (state) => {
    return {
      from_ap_code: state.appState.from_ap_code,
      ap_code_options: state.appState.ap_code_options
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFromApCode: (from_ap_code) => dispatch(setFromApCode(from_ap_code))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FromApAutoField);