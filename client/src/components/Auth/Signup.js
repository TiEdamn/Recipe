import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from '../../queries';
export default class Signup extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event, signupUser) => {
        event.preventDefault();
        signupUser().then(data => {
            console.log(data);
        });
    };

    render() {
        const { username, email, password, passwordConfirmation } = this.state;

        return (
            <div className="App">
                <h2 className="App">Signup</h2>
                <Mutation
                    mutation={SIGNUP_USER}
                    variables={{ username, email, password }}
                >
                    {(signupUser, { data, loading, error }) => {
                        return (
                            <form
                                className="form"
                                onSubmit={event =>
                                    this.handleSubmit(event, signupUser)
                                }
                            >
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Input name"
                                    value={username}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Input email"
                                    value={email}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Input password"
                                    value={password}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="password"
                                    name="passwordConfirmation"
                                    placeholder="Confirm password"
                                    value={passwordConfirmation}
                                    onChange={this.handleChange}
                                />
                                <button
                                    type="submit"
                                    className="button-primary"
                                >
                                    Submit
                                </button>
                            </form>
                        );
                    }}
                </Mutation>
            </div>
        );
    }
}
