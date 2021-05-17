import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navigation from './Navigation';

// code from spec

class LogIn extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                userName: '',
                password: '',
            },
            redirect: false,
        };
    }

    handleChange = (e) => {
        const updatedUser = { ...this.state.user };
        const inputField = e.target.name;
        const inputValue = e.target.value;
        updatedUser[inputField] = inputValue;

        this.setState({ user: updatedUser });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.mockLogIn(this.state.user);
        this.setState({ redirect: true });
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to='/user' />;
        }

        return (
            <div className='main-content'>
                <h1 className='heading'>Log In</h1>
                <Navigation />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='userName'>User Name</label>
                        <input
                            type='text'
                            name='userName'
                            class='textbox'
                            onChange={this.handleChange}
                            value={this.state.user.userName}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' class='textbox' />
                    </div>
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default LogIn;
