import React, { Component } from 'react';
import { Combobox, Button, TextInput } from 'evergreen-ui';
import '../styles/UserDetail.css';

export class UserDetail extends Component {
    render() {
        return (
            <div className="userDetailContainer">
              <div className="title five-pix-pad">
                {this.props.title}
              </div>
              <div className="comboboxContainer five-pix-pad">
                <Combobox 
                  items={["Bob's eatery", "Mexican cantina", "Burger Werx"]}
                  placeholder="Select Venue"
                  width="100%"
                />
              </div>
              <div className="textInputContainer five-pix-pad">
                <TextInput 
                  placeholder="Table Number"
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