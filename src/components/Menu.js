import React, { Component } from 'react';
import { Button } from 'evergreen-ui';
import { MenuItem } from './MenuItem';
import '../styles/Menu.css';

export class Menu extends Component {

    componentDidMount() {
        // this.props.getMenuItems(this.props.selectedMerchant.merchantID);
    }

	render() {
        console.log("menu props", this.props)
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
                        {this.props.menuItems !== undefined && this.props.menuItems.map((item) => {
                            return (
                                <MenuItem item={item}/>
                            )
                        })}
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