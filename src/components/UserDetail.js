import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Combobox, Button, TextInput } from 'evergreen-ui';
import { Redirect } from 'react-router-dom';
import '../styles/UserDetail.css';

export class UserDetail extends Component {

    componentDidMount() {
        if (this.props.loggedIn) {
            this.props.getMerchants();
        }
    }

    render() {
        if (!this.props.loggedIn) {
            return (
                <Redirect to="/login" />
            )
        } else {
            return (
                <div className="userDetailContainer">
                    <div className="title five-pix-pad">
                        {this.props.title}
                    </div>
                    <div className="comboboxContainer five-pix-pad">
                        {/* the itemToString values need to be unique or evergreen with throw console errors*/}
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
                        onChange={(event) => { this.props.setTableNumber(event.target.value) }}
                        width="100%"
                        />
                    </div>
                    <div className="buttonContainer five-pix-pad">
                        <Button appearance="minimal"><Link to="/Menu" style={{textDecoration: 'none'}}>Next</Link></Button>
                    </div>
                </div>
            )
        }
    }
}