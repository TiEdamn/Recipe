import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import './index.css';
import App from './components/App';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App}></Route>
                <Route path="/signin" component={Signin}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

ReactDOM.render(
    <ApolloProvider client={client}>
        <Root />
    </ApolloProvider>,
    document.getElementById('root')
);
