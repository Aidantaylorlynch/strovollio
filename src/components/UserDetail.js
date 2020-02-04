import React, { Component } from 'react';
import { Combobox, Button, TextInput } from 'evergreen-ui';
import '../styles/UserDetail.css';

export class UserDetail extends Component {

    componentDidMount() {
        this.props.getMerchants();
    }

    render() {
        return (
            <div className="userDetailContainer">
                <div className="title five-pix-pad">
                    {this.props.title}
                </div>
                <div className="comboboxContainer five-pix-pad">
                    <Combobox 
                    items={this.props.merchants}
                    itemToString={(merchant) => { return merchant ? merchant.name : '' }}
                    onChange={(merchant) => { this.props.setSelectedMerchant(merchant) }}
                    placeholder="Select Venue"
                    width="100%"
                    />
                </div>
                <div className="textInputContainer five-pix-pad">
                    <TextInput 
                    placeholder="Table Number"
                    onChange={(tableNumber) => { this.props.setTableNumber(tableNumber) }}
                    width="100%"
                    />
                </div>
                <div className="buttonContainer five-pix-pad">
                    <Button is="a" href="/Order" appearance="minimal">Next</Button>
                </div>
            </div>
        )
    }
}