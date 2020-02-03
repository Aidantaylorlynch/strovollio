import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Combobox, Button } from 'evergreen-ui';
import { OrderContainer } from './OrderContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className="appContainer">
              <div className="title five-pix-pad">
                {this.props.title}
              </div>
              <div className="comboboxContainer five-pix-pad">
                <Combobox 
                  items={["Bob's eatery", "Mexican cantina", "Burger Werx"]}
                  placeholder="Select Venue"
                />
              </div>
              <div className="buttonContainer five-pix-pad">
                <Button is="a" href="/Order" appearance="minimal">Next</Button>
              </div>
            </div>
          </Route>
          <Route path="/Order">
            <OrderContainer />
          </Route>
        </Switch>
      </BrowserRouter>
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