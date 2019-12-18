import React from 'react';
import './styles.css';

const Button = (props) => (
  <button id="btn" onClick={props.handleClick}>{props.name}</button>
);

export default Button;
