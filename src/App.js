import React, { Component } from 'react';
import { OrderContainer } from './components/OrderContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserDetailContainer } from './components/UserDetailContainer';
import './styles/App.css';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
			<Route exact path="/">
				<UserDetailContainer />
			</Route>
			<Route path="/Order">
				<OrderContainer />
			</Route>
        </Switch>
      </BrowserRouter>
    )
  }
}