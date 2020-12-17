import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import Home from '../components/home/Home';


const router = (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    </Router>
)

export default router;