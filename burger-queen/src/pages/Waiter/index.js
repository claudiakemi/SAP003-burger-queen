import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebaseUtils';
import './styles.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';

function Waiter () {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    firebase.firestore()
    .collection('menu')
    .get()
    .then(
      querySnapshot => {
        const newMenu = querySnapshot.docs.map((doc) => ({
          ...doc.data()}))
          setMenu(newMenu)
        }
      )
    },
    []
  );

  function filterMenu (e) {
    const buttonId = e.currentTarget.id;
    if (buttonId === "breakfast") {
      const breakfast = menu.filter((newMenu) => newMenu.breakfast === true);
      setMenu(breakfast)
    } else {
      e.currentTarget.removeEventListener(e, setMenu)
      const lunch = menu.filter((newMenu) => newMenu.breakfast === false);
      setMenu(lunch)
    }
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
    const itemIndex = order.indexOf(item);
    order.splice(itemIndex)
    setOrder([...order])
    console.log(order)
    setTotal(total)
  }

  return (
    <main id="all-menu">
    <Header />
    <h1 id="waiter">Cardápio</h1>
    <div>
    <Button id="breakfast" class="btn" name="Café da manhã" handleClick={filterMenu}/>
    <Button id="lunch" class="btn" name="Almoço e Janta" handleClick={filterMenu}/>
    </div>
    <section id="client-form">
    <Input label="Nome do cliente: " value={client}
    handleChange={e => setClient(e.currentTarget.value)}/>
    <Input label="Nº da mesa: " value={table}
    handleChange={e => setTable(e.currentTarget.value)}/>
    </section>
    <ul id="items-list">
    {menu.map(doc => (
      <section id="item-card">
      <p key={doc.id}></p>
      <h3>{doc.name}</h3>
      <div>Quantidade:
      <Button id="quant-btn" name="-" handleClick={() => subtractItem(doc)} />
      { order.map(elem => (elem.name === doc.name && elem.quantity > 0)? elem.quantity : false)}
      <Button id="quant-btn" name="+" handleClick={() => addItem(doc)} />
      </div>
      <p>{doc.options} {doc.extra}</p>
      <p>Preço: R${doc.price},00</p>
      </section>
    ))}
    </ul>
    <hr id="line"/>
    <section id="resume-card">
    <h1>Resumo do pedido</h1>
    <p>Mesa: {table} - Cliente: {client}</p>
    <ul id="order-list">
    {order.map(doc => (
      <section id="order-card">
      <p>{doc.quantity} {doc.name}</p>
      <p>Preço: R${doc.price},00</p>
      <Button id="delete-item" handleClick={() => deleteItem()} name="Deletar item" />
      <hr/>
      </section>
    ))}
    </ul>
    <p>Total: R${total},00</p>
    </section>
    <Button class="btn" handleClick={saveOrder} name="Enviar para preparo"/>
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
      total,
      timestamp: new Date().toLocaleString('pt-BR')
    })
    .then(() => {
      setOrder([])
      setClient('')
      setTable('')
      setTotal(0)
      alert("Pedido enviado")
    })
  }
}

export default Waiter
