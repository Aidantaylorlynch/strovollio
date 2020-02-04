import React, { Component } from 'react';
import '../styles/MenuItem.css';

export class MenuItem extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="menuItemContainer">
                <div className="menuItemHeader">
                    <div className="menuItemName five-pix-pad">
                        {this.props.item.name}
                    </div>
                    <div className="menuItemPrice five-pix-pad">
                        ${this.props.item.price}
                    </div>
                </div>
                <div className="menuItemBody">
                    <div className="menuItemDescription five-pix-pad">
                        {this.props.item.description}
                    </div>
                </div>
            </div>
        )
    }
}