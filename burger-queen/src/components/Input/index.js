import React from 'react';
import './styles.css';

const Input = (props) => (
  <form id="client-form">
  <label>{props.label}</label>
  <input type="text" id="input"/>
  <select
//  onChange={e => setTable(e.currentTarget.value)}
  >
  <option
  //value={table}
  >Selecione o nº da mesa</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  </select>
  <input type="submit" value="Salvar" id="submit-btn"/>
  </form>
);

export default Input
