import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebaseUtils';
import './styles.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Link } from "react-router-dom";
let extraArray = [];

function Waiter () {
  const [menu, setMenu] = useState([]);
  const [filteredMenu,setFilteredMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [total, setTotal] = useState(0);
  const [option, setOption] = useState('');
  const [extra, setExtra] = useState([]);
  const [orderStatus, setOrderStatus] = useState('Em preparo');

  useEffect(() => {
    firebase.firestore()
    .collection('menu')
    .get()
    .then(
      querySnapshot => {
        const newMenu = querySnapshot.docs.map((doc) => ({
          ...doc.data()}))
          setMenu(newMenu)
          setFilteredMenu(newMenu)
        }
      )
    },
    []
  );

  function filterMenu (e) {
    const buttonId = e.currentTarget.id;
    if (buttonId === "breakfast") {
      const breakfast = menu.filter((item) => item.breakfast === true);
      setFilteredMenu(breakfast)
    } else {
      const lunchDinner = menu.filter((item) => item.breakfast === false);
      setFilteredMenu(lunchDinner)
    }
  }

  function selectOption (event) {
    const optionName = event.currentTarget.id;
    setOption(optionName)
  }

  function selectExtra (event) {
    const extraName = event.currentTarget.id;
    let result = extraArray.push(extraName);
    (extraArray.length === 1)? setTotal(total+(1)) : setTotal(total)
    setExtra(extraName)
  }

  const addItem = (item) => {
    if(order.includes(item)){
      item.quantity += 1
      setOrder([...order]);
    } else {
      item.quantity = 1;
      setOrder(current => [...current, item])
    }
    setTotal(total + (item.price))
  }

  const subtractItem = (item) => {
    if(item.quantity > 0){
      item.quantity -= 1
      setOrder([...order]);
      setTotal(total - (item.price))
    } else {
      item.quantity = 0;
      setOrder([...order])
    }
  }

  function deleteItem (item) {
    const itemIndex = order.filter(elem => elem !== item)
    setOrder(itemIndex)
    setTotal(total - (item.price*item.quantity))
  }

  return (
    <main id="all-menu">
    <Header />
    <hr id="line"/>
    <Link to='/pages/Ready/index'>
    <Button class="btn" name="Ver pedidos prontos para entrega"/>
    </Link>
    <hr id="line"/>
    <h1 id="waiter">Cardápio</h1>
    <div>
    <Button id="breakfast" class="btn" name="Café da manhã" handleClick={filterMenu}/>
    <Button id="lunch" class="btn" name="Almoço e Janta" handleClick={filterMenu}/>
    </div>
    <section id="client-form">
    <Input type="text" id="input" label="Nome do cliente: " value={client}
    handleChange={e => setClient(e.currentTarget.value)}/>
    <Input type="text" id="input-table" label="Nº da mesa: " value={table}
    handleChange={e => setTable(e.currentTarget.value)}/>
    </section>
    <ul id="items-list">
    {filteredMenu.map(doc => (
      <section id="item-card">
      <figure id="img-box">
      <img id="photo" src={doc.img}/>
      </figure>
      <article id="product-info">
      <h3>{doc.name}</h3>
      <div id="quantity">Quantidade:
      <Button id="quant-btn" name="-" handleClick={() => subtractItem(doc)} />
      { order.map(elem => (elem.name === doc.name && elem.quantity > 0)? elem.quantity : false)}
      <Button id="quant-btn" name="+" handleClick={() => addItem(doc)} />
      </div>
      <section id="options">
      {doc.options.map(data => (
        (data.length !== 0) ? <Button name={data} id={data} class="option-btn" handleClick={selectOption}/> : ""
      ))}
      {doc.extra.map(data => (
        (data.length !== 0) ? <Button name={data} id={data} class="extra-btn" handleClick={selectExtra} /> : ""
      ))}
      </section>
      <p>Preço: R${doc.price},00</p>
      </article>
      </section>
    ))}
    </ul>
    <hr id="line"/>
    <section id="resume-card">
    <h1 id="resume">Resumo do pedido</h1>
    <p>Mesa: {table} - Cliente: {client}</p>
    {order.map(doc => (
      <section id="order-card">
      <p><strong>{doc.quantity} {doc.name}</strong></p>
      {doc.options.reduce(data => (
        (data.length !== 0)? <p>{option}</p> : ""
      ))}
      {doc.extra.reduce(data => (
        (data.length !== 0)? <p>{extra}</p> : ""
      ))}
      <p>Preço: R${doc.price},00</p>
      <Button id="delete-item" handleClick={() => deleteItem(doc)} name="Deletar item" />
      <hr id="resume-line"/>
      </section>
    ))}
    <p>Total: R${total},00</p>
    </section>
    <Button class="btn" handleClick={saveOrder} name="Enviar para preparo"/>
    <Link to='/'><Button class="back" name="Voltar"/></Link>
    </main>
  )

  function saveOrder (e) {
    e.preventDefault()
    firebase.firestore()
    .collection('orders')
    .add({
      order,
      client,
      table,
      option,
      extra,
      total,
      orderStatus,
      timestamp: new Date().toLocaleString('pt-BR')
    })
    .then(() => {
      setOrder([])
      setClient('')
      setTable('')
      setOption('')
      setExtra([])
      setTotal(0)
      setOrderStatus('Em preparo')
      alert("Pedido enviado")
    })
  }
}

export default Waiter
