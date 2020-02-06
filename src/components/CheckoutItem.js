import React, { Component } from 'react'
import '../styles/CheckoutItem.css';

export class CheckoutItem extends Component {
    render() {
        return (
            <div className="checkoutItemContainer">
                <div className="checkoutItemName five-pix-pad">
                    {this.props.checkoutItem.name}
                </div>
                <div className="checkoutItemPrice five-pix-pad">
                    ${this.props.checkoutItem.price}
                </div>
            </div>
        )
    }
}