import React, { Component } from 'react';
import { TextField } from 'material-ui';

export default class InputField extends Component {

  render() {
    return (
      <div>
        <div style={{paddingRight:20, paddingTop:23}}><TextField hintText={this.props.placeholder} /></div>
      </div>
    )}

}
