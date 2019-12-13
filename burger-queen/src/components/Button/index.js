import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Waiter from '../../pages/Waiter/index';

const Button = () => (
  <Link to='/pages/Waiter/index'><button id="waiter-btn">Garçom/Garçonete</button></Link>
);

export default Button;
