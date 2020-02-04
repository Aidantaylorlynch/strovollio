import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'evergreen-ui';
import { MenuItem } from './MenuItem';
import '../styles/Menu.css';

export class Menu extends Component {

    componentDidMount() {
        if (this.props.selectedMerchant !== null) {
            this.props.getMenuItems(this.props.selectedMerchant.merchantID);
        }
    }

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
                        {this.props.menuItems.length > 0 && this.props.menuItems.map((item, index) => {
                            return (
                                <MenuItem key={index} item={item}/>
                            )
                        })}
                    </div>
                </div>
                <div className="doubleButtonContainer">
                    <Button appearance="minimal"><Link to="/" style={{textDecoration: 'none'}}>Back</Link></Button>
                    <Button appearance="minimal"><Link to="/Checkout" style={{textDecoration: 'none'}}>Checkout</Link></Button>
                </div>
			</div>
		)
	}
}