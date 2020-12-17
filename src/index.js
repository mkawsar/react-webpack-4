import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Home from './components/home/Home';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();


import App from './App';

// const App = () => (
//     <div>
//         <h1>Hello worlds!!</h1>
//     </div>
// )
ReactDOM.render(<BrowserRouter>
    <Router history={history}>
        <Route exact path='/' component={Home}/>
    </Router>
</BrowserRouter>, document.getElementById('root'));
