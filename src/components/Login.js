import React, { Component } from 'react';
import { TextInput, Button } from 'evergreen-ui';
import { Link, Redirect } from 'react-router-dom';
import '../styles/Login.css';

export class Login extends Component {

    render() {
        if (this.props.loggedIn) {
            return (
                <Redirect to="/" />
            )
        } else {
            return (
                <div className="loginContainer">
                    <div className="five-pix-pad">
                        <TextInput placeholder="username"/>
                    </div>
                    <div className="five-pix-pad">
                        <TextInput placeholder="password"/>
                    </div>
                    <div className="five-pix-pad">
                        <Button appearance="minimal" onClick={() => {
                            this.props.login()
                        }}><Link to="/" style={{textDecoration: 'none' }}>Login</Link></Button>
                    </div>
                </div>
            )
        }
    }
}