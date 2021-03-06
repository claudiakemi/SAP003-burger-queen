import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Chef from './pages/Chef/index';
import Waiter from './pages/Waiter/index';
import Ready from './pages/Ready/index';

const Routing = () => {
  return (
  <Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Waiter" component={Waiter} />
        <Route path="/Chef" component={Chef} />
        <Route path="/Ready" component={Ready} />
    </Switch>
  </Router>
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
