import React, { Component } from 'react';
import '../styles/MenuItem.css';

export class MenuItem extends Component {
    render() {
        return (
            <div className="menuItemContainer">
                <div className="menuItemHeader">
                    <div className="menuItemName">
                        {this.props.item.name}
                    </div>
                    <div className="menuItemPrice">
                        {this.props.item.price}
                    </div>
                </div>
                <div className="menuItemBody">
                    <div className="menuItemDescription">
                        {this.props.item.description}
                    </div>
                </div>
            </div>
        )
    }
}