import React from 'react';
import './styles.css';
import Header from './components/Header';
import Button from './components/Button'
import Chef from './pages/Chef';
import Waiter from './pages/Waiter';
import { Link } from 'react-router-dom';
// import firebase from './utils/firebaseUtils';

function App() {
  return (
    <div id="all">
    <Header />
    <h2 id="work">Selecione sua função:</h2>
    <section id="buttons">
    <Link to='/pages/Waiter/index'><Button name="Garçom/Garçonete"/></Link>
    <Link to='/pages/Chef/index'><Button name="Cozinheiro(a)"/></Link>
    </section>
    </div>
  );
}

export default App;
