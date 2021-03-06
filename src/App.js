import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'
import './styles.css';
import Header from './components/Header';
import Button from './components/Button'

function App() {
  return (
    <div id="all">
    <Header />
    <hr id="line"/>
    <h2 id="work">Selecione sua função:</h2>
    <section id="buttons">
    <Link to='/Waiter'><Button class="btn" name="Garçom/Garçonete"/></Link>
    <Link to='/Chef'><Button class="btn" name="Cozinheiro(a)"/></Link>
    </section>
    </div>
  );
}

ReactDOM.render(App, document.getElementById('root'));

export default App;
