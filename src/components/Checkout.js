import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'evergreen-ui';
import '../styles/Checkout.css'

export class Checkout extends Component {
    render() {
        return (
            <div className="checkoutContainer">
                <div className="checkoutHeader">
                    Checkout
                </div>
                <div className="doubleButtonContainer">
                    <Button appearance="minimal"><Link to="/Menu" style={{textDecoration: 'none'}}>Back</Link></Button>
                </div>
            </div>
            
        )
    }
}