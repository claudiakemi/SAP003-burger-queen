import React from 'react';
import './styles.css';
import Header from './components/Header';
import Button from './components/Button'
import Chef from './pages/Chef';
import Waiter from './pages/Waiter';
// import firebase from './utils/firebaseUtils';

function App() {
  return (
    <div className="App">
      <Header />
      <h2 id="work">Selecione sua função:</h2>
      <Button />
    </div>
  );
}

export default App;
