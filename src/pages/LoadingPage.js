import React, { Component } from 'react';

import ap from '../images/ap.gif';

export default class LoadingPage extends Component {

  render() {
    return (
      <div>
        <div style={{textAlign: 'center', paddingTop:80}}><img src={ap} width="300" height="215" alt=""></img></div>
      </div>
    )}
}