import React from 'react';
import './styles.css';

const Button = (props) => (
  <button id={props.id} className={props.class} onClick={props.handleClick}>{props.name}</button>
);

export default Button;
