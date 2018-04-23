import React, { Component } from 'react';
import { connect } from 'react-redux';

import StartDateMenu from '../components/StartDateMenu.js';
import EndDateMenu from '../components/EndDateMenu.js';
import FromApAutoField from '../components/FromApAutoField.js';
import ToApAutoField from '../components/ToApAutoField.js';
import DurationSelectMenu from '../components/DurationSelectMenu.js';
import MaxPriceSelectMenu from '../components/MaxPriceSelectMenu.js';
import SearchButton from '../components/SearchButton.js';
import ap from '../images/ap.png';

class MainPage extends Component {

  render() {

    const { width } = this.props.window_width;
    const isPortraitMobile = width <= 500;
    const isLandscapeMobile = width <= 800;
    // the rest is the same...

if (isPortraitMobile) {
    return (
      <div>
        <div style={{textAlign: 'center', paddingTop:80}}><img src={ap} width="150" height="107" alt=""></img></div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <FromApAutoField placeholder="Select Source Airport" />
          <ToApAutoField placeholder="Select Destination Airport" />
          <StartDateMenu placeholder="Select Starting Date" />
          <EndDateMenu placeholder="Select Ending Date" />
          <DurationSelectMenu placeholder="Duration" />
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
          <SearchButton label="Search" />
        </div>
      </div>
    );
  } else if (isLandscapeMobile) {
    return (
      <div>
        <div style={{textAlign: 'center', paddingTop:80}}><img src={ap} width="150" height="107" alt=""></img></div>
        <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
          <FromApAutoField placeholder="Select Source Airport" />
          <ToApAutoField placeholder="Select Destination Airport" />
          <StartDateMenu placeholder="Select Starting Date" />
          <EndDateMenu placeholder="Select Ending Date" />
          <DurationSelectMenu placeholder="Duration" />
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
          <SearchButton label="Search" />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div style={{textAlign: 'center', paddingTop:80}}><img src={ap} width="300" height="215" alt=""></img></div>
        <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
          <FromApAutoField placeholder="Select Source Airport" />
          <ToApAutoField placeholder="Select Destination Airport" />
          <StartDateMenu placeholder="Select Starting Date" />
          <EndDateMenu placeholder="Select Ending Date" />
          <DurationSelectMenu placeholder="Duration" />
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
          <SearchButton label="Search" />
        </div>
      </div>
    )}
  }
}

const mapStateToProps = (state) => {
    return {
      window_height: state.appState.window_height,
      window_width: state.appState.window_width,
    };
};

export default connect(mapStateToProps)(MainPage);