import React from 'react';
import Login from './components/login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';


export default ()=>(
    <Router basename="/admin">
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />        
            <Route path="/app" component={App} />
            <Route path="/login" component={Login} />
        </Switch>
    </Router>
)