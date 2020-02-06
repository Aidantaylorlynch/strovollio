import React, { Component } from 'react';
import '../styles/MenuItem.css';

export class MenuItem extends Component {
    itemCounter() {
        const total = this.props.cart.reduce((totalAccumulator, menuItem) => {
            return menuItem.menuItemID === this.props.menuItem.menuItemID ? totalAccumulator + 1 : totalAccumulator;
        }, 0)
        return total > 0 ? total : null;    
    }
    render() {
        return (
            <div className="menuItemContainer">
                <div className="menuItemHeader">
                    <div className="menuItemName five-pix-pad">
                        {this.props.menuItem.name}
                    </div>
                    <div className="menuItemPrice five-pix-pad">
                        ${this.props.menuItem.price}
                    </div>
                    <div className="addRemoveButtonsContainer">
                        <div className="addButton five-pix-pad" onClick={() => {
                                this.props.addMenuItemToCart(this.props.menuItem)
                            }}>
                            <span>+</span>
                        </div>
                        <div className="removeButton five-pix-pad" onClick={() => {
                            this.props.removeMenuItemFromCart(this.props.menuItem)
                            }}>
                            <span>-</span>
                        </div>
                    </div>
                    <div className="menuItemCounter five-pix-pad">
                        <div>
                            {this.itemCounter()}
                        </div>
                    </div>
                </div>
                <div className="menuItemBody">
                    <div className="menuItemDescription five-pix-pad">
                        {this.props.menuItem.description}
                    </div>
                </div>
            </div>
        )
    }
}