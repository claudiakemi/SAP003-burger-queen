import React from 'react';
import './styles.css';
import Header from './components/Header';
import Button from './components/Button'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div id="all">
    <Header />
    <h2 id="work">Selecione sua função:</h2>
    <section id="buttons">
    <Link to='/pages/Waiter/index'><Button id="btn" name="Garçom/Garçonete"/></Link>
    <Link to='/pages/Chef/index'><Button id="btn" name="Cozinheiro(a)"/></Link>
    </section>
    </div>
  );
}

export default App;
