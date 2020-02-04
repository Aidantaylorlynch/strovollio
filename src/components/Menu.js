import React, { Component } from 'react';
import { Combobox, Button, TextInput } from 'evergreen-ui';
import '../styles/Menu.css';

export class Menu extends Component {
	render() {
		return (
			<div className="menuContainer">
                <div className="title five-pix-pad">
                    {this.props.title}
                </div>
                <div className="menu">
                    <div className="menuHeader">
                        Menu
                    </div>
                    <div className="menuBody">
                        Menu Body
                    </div>
                </div>
                <div className="doubleButtonContainer">
                    <Button is="a" href="/" appearance="minimal">Back</Button>
                    <Button is="a" href="/Checkout" appearance="minimal">Checkout</Button>
                </div>
			</div>
		)
	}
}