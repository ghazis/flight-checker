import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from './routes';
import bg from './images/bg.jpg';
import MainPage from './pages/MainPage.js';
import LoadingPage from './pages/LoadingPage.js';
import ResultsPage from './pages/ResultsPage.js';
import { setWindowHeight, setWindowWidth } from './actions/actions.js';

class App extends Component {

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    setWindowHeight(window.innerHeight);
    setWindowHeight(window.innerWidth);
  };

  render() {

    const width = this.props.window_width;
    const isMobile = width <= 800;

    if (isMobile) {
      if (this.props.results.length != 0) {
        return (
          <MuiThemeProvider>
            <div style={{backgroundImage: "url(" + bg + ")", top:'0', bottom:'0', left:'0', right:'0', backgroundSize:'cover'}}>
              <ResultsPage />
            </div>
            </MuiThemeProvider>
        )}
      return (
        <MuiThemeProvider>
          <div style={{backgroundImage: 'url(' + bg + ')', top:'0', bottom:'0', left:'0', right:'0', backgroundSize:'cover'}}>
          {this.props.is_loading ? (<LoadingPage />) : (<MainPage />)}
          </div>
          </MuiThemeProvider>
      )
    } else {
      if (this.props.results.length != 0) {
        return (
          <MuiThemeProvider>
            <div style={{backgroundImage: "url(" + bg + ")", position:'absolute', top:'0', bottom:'0', left:'0', right:'0', backgroundSize:'cover'}}>
              <ResultsPage />
            </div>
            </MuiThemeProvider>
        )}
      return (
        <MuiThemeProvider>
          <div style={{backgroundImage: 'url(' + bg + ')', position:'absolute', top:'0', bottom:'0', left:'0', right:'0', backgroundSize:'cover'}}>
          {this.props.is_loading ? (<LoadingPage />) : (<MainPage />)}
          </div>
          </MuiThemeProvider>
      )}
    }
}

const mapStateToProps = (state) => {
    return {
      is_loading: state.appState.is_loading,
      results: state.appState.results,
      window_height: state.appState.window_height,
      window_width: state.appState.window_width,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setWindowHeight: (window_height) => dispatch(setWindowHeight(window_height)),
        setWindowWidth: (window_width) => dispatch(setWindowWidth(window_width))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);