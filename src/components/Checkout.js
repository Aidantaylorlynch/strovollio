import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'evergreen-ui';
import { CheckoutItem } from './CheckoutItem';
import '../styles/Checkout.css'

export class Checkout extends Component {
    render() {
        if (this.props.selectedMerchant && this.props.tableNumber) {
            return (
                <div className="checkoutContainer">
                    <div className="checkoutHeader">
                        Checkout
                    </div>
                    <div className="checkoutBody">
                        {this.props.cart.length > 0 && this.props.cart.map((checkoutItem, index) => {
                            return (
                                <CheckoutItem key={index} checkoutItem={checkoutItem}/>
                            )
                        })}
                        <div className="checkoutTotal">
                            Total ${this.props.cart.length > 0 ? this.props.cart.reduce((total, checkoutItem) => {
                                return total + checkoutItem.price;
                            }, 0): ''}
                        </div>
                    </div>
                    <div className="doubleButtonContainer">
                        <Button appearance="minimal"><Link to="/Menu" style={{textDecoration: 'none'}}>Back</Link></Button>
                        <Button appearance="minimal"><Link to="/" style={{textDecoration: 'none'}}>Confirm Order</Link></Button>
                    </div>
                </div>
            )
        } else {
            return (
                <Redirect to="/" />
            )
        }
    }
}