import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Chef from './pages/Chef/index';
import Waiter from './pages/Waiter/index';

const Routing = () => {
  return (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/pages/Waiter/index" component={Waiter} />
      <Route path="/pages/Chef/index" component={Chef} />
    </div>
  </Router>
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
