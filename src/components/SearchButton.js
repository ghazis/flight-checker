import React, { Component } from 'react';
import { FlatButton } from 'material-ui';
import { connect } from 'react-redux';

import { getFlights, setIsLoading } from '../actions/actions.js';

class SearchButton extends Component {

  handleClick = () => {
    this.props.setIsLoading(true);
    this.props.getFlights();
  }

  render() {
    return (
      <div>
        <div style={{paddingTop:23}}><FlatButton label={this.props.label} onClick={this.handleClick} /></div>
      </div>
    )}

}

const mapStateToProps = (state) => {
    return {
      is_loading: state.appState.is_loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFlights: () => dispatch(getFlights()),
        setIsLoading: (is_loading) => dispatch(setIsLoading(is_loading))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);