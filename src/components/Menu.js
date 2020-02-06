import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
        if (this.props.selectedMerchant && this.props.tableNumber) {
            return (
                <div className="menuContainer">
                    <div className="title five-pix-pad">
                        {this.props.title} - Total ${this.props.cart.length > 0 ? this.props.cart.reduce((totalPrice, menuItem) => {
                            return totalPrice + menuItem.price
                        }, 0) : ''}
                    </div>
                    <div className="menu">
                        <div className="menuHeader">
                            Menu
                        </div>
                        <div className="menuBody">
                            {this.props.menuItems.length > 0 && this.props.menuItems.map((menuItem, index) => {
                                return (
                                    <MenuItem key={index} cart={this.props.cart} menuItem={menuItem} addMenuItemToCart={this.props.addMenuItemToCart} removeMenuItemFromCart={this.props.removeMenuItemFromCart}/>
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
        } else {
            return (
                <Redirect to="/"/>
            )
        }
		
	}
}