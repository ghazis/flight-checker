import React, { Component } from 'react';
import { SelectField, MenuItem } from 'material-ui';
import { connect } from 'react-redux';

import { setMaxPrice } from '../actions/actions.js';

class MaxPriceSelectMenu extends Component {

  handleChange = (event, index, value) => {
    this.props.setMaxPrice(value);
  }

  render() {

    var menu_items = [];
    for (var i=50; i<2000; i+=100) {
      menu_items.push(<MenuItem value={i} primaryText={i} key={i} />)
    }

    return (
       <div style={{paddingRight:20}}>
        <SelectField floatingLabelText={this.props.placeholder} value={this.props.max_price} onChange={this.handleChange} style={{width:160}}>
          {menu_items}
        </SelectField>
       </div>
    )}
}

const mapStateToProps = (state) => {
    return {
      max_price: state.appState.max_price
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMaxPrice: (max_price) => dispatch(setMaxPrice(max_price))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MaxPriceSelectMenu);