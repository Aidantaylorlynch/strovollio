import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserDetailContainer } from './components/UserDetailContainer';
import { MenuContainer } from './components/MenuContainer';
import './styles/App.css';

export class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<UserDetailContainer />
					</Route>
					<Route path="/Menu">
						<MenuContainer />
					</Route>
				</Switch>
			</BrowserRouter>
		)
	}
}