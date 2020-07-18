import React from 'react';
import LoginEmail from './LoginEmail';
import LoginPassword from './LoginPassword';
import "./css/login.css";
import logo from './img/logo.png';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function Login() {

    return (
        <Router>
            <Route exact path="/">
                <Redirect to="/email" />
            </Route>
            <Switch>
                <Route 
                path="/email" 
                component={() => <LoginEmail logo={logo} />} 
                />
                <Route 
                path="/password" 
                component={() => <LoginPassword logo={logo} />} 
                />
            </Switch>
        </Router>
    );
}

export default Login;