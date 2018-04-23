import React, { Component } from 'react';
import { SelectField, MenuItem } from 'material-ui';
import { connect } from 'react-redux';

import { setDuration } from '../actions/actions.js';

class DurationSelectMenu extends Component {

  handleChange = (event, index, value) => {
    this.props.setDuration(value);
  }

  render() {

    var menu_items = [];
    for (var i=1; i<21; i++) {
      menu_items.push(<MenuItem value={i} primaryText={i} key={i} />)
    }

    return (
       <div style={{paddingRight:20}}>
        <SelectField floatingLabelText={this.props.placeholder} value={this.props.duration} onChange={this.handleChange} style={{width:100}}>
          {menu_items}
        </SelectField>
       </div>
    )}
}

const mapStateToProps = (state) => {
    return {
      duration: state.appState.duration
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setDuration: (duration) => dispatch(setDuration(duration))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DurationSelectMenu);