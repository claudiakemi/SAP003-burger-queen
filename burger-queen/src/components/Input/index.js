import React from 'react';
import './styles.css';

const Input = (props) => (
  <>
  <label>{props.label}</label>
  <input type="text" id="input" value={props.value} onChange={props.handleChange}/>
  </>
);

export default Input
