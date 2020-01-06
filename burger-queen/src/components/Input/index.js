import React from 'react';
import './styles.css';

const Input = (props) => (
  <>
  <label>{props.label}</label>
  <input type={props.type} id={props.id} value={props.value} name={props.name} onChange={props.handleChange}/>
  </>
);

export default Input
