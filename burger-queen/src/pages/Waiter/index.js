import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebaseUtils';
import './styles.css';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Waiter () {
  const [menu, setMenu] = useState([]);
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    firebase.firestore()
    .collection('menu')
    //.where('breakfast', '==', 'true')
    .get()
    .then(querySnapshot => {
      const newMenu = querySnapshot.docs.map((doc) => ({
      ...doc.data()}))
      setMenu(newMenu)
    })
  },
  []
);

  return (
    <section id="all-menu">
    <h1 id="waiter">Cardápio</h1>
    <div>
      <Button name="Café da manhã" />
      <Button name="Almoço e Janta" />
    </div>
    <Input label="Nome do cliente: " />
    <ul id="items-list">
      {menu.map(doc => (
        <section id="item-card">
          <p key={doc.id}></p>
          <h3>{doc.name}</h3>
          <div>Quantidade:
            <button id={doc.id} onClick={(id) => setCounter(counter - 1)}>-</button>
            {counter}
            <button id={doc.id} onClick={(id) => setCounter(counter + 1)}>+</button>
          </div>
          <p>Preço: R${doc.price},00</p>
        </section>
      ))}
    </ul>

    <Button
    //handleClick={addOrder}
    name="Salvar pedido"/>
</section>
  )

  // const [order, setOrder] = useState([]);
  // const [client, setClient] = useState([]);
  // const [table, setTable] = useState([]);
  // const [quantity, setQuantity] = useState([]);
  //
  //
  // function addOrder (e) {
  //   e.preventDefault()
  //     firebase.firestore()
  //     .collection('orders')
  //     .add({
  //       order,
  //       client,
  //       //table,
  //       counter
  //     })
  //     .then(() => {
  //       setOrder([])
  //       setClient("")
  //       //setTable("")
  //       setCounter(0)
  //     })
  // }


  // return (
  //   <section id="order">
  //   <h1 id="waiter">Resumo do pedido</h1>
  //   <ul id="order-list">
  //     {order.map(doc => (
  //       <section id="order-card">
  //       <p>{order.id}</p>
  //       <p>{doc.table}</p>
  //       <p>{doc.client}</p>
  //       <p>Total: R${doc.price},00</p>
  //       </section>
  //     ))}
  //   </ul>
  //   </section>
  // )
  }




export default Waiter
