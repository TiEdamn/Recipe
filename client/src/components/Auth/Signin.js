import React, { Component } from 'react';

export default class Signin extends Component {
    render() {
        return (
            <div className="App">
                <h2 className="App">Signup</h2>
                <form className="form">
                    <input
                        type="text"
                        name="username"
                        placeholder="Input name"
                    />
                    <input type="text" name="email" placeholder="Input email" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Input password"
                    />
                    <input
                        type="password"
                        name="passwordConfirmation"
                        placeholder="Confirm password"
                    />
                    <button type="submit" className="button-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
