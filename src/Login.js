import React, { Component } from 'react';
import './App.css';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="content">
                        <button className="sign">Sign In</button>
                        <button className="notsign">Sign Up</button>
                        <div className="container">
                            <div className="title">
                                <p className="title-p1">Sign In</p><span className="title-span">or</span>
                                <p className="title-p2">Sign Up</p>
                            </div>
                            <label>FULL NAME</label>
                            <input type="text" placeholder='Enter your full name' />
                            <label>Password</label>
                            <input type="text" placeholder="********" />
                            <label>E-MAIL</label>
                            <input type="text" placeholder='Enter your E-mail' />
                        </div>
                        <input className="input-cb" type="checkbox" />
                        <p>I agree all statements in <span className="cb-span">terms of service</span></p>
                        <button className="lb">Sign Up</button>
                        <p className="lb-p">I'm already member</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;