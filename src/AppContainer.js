import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.appTitle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)