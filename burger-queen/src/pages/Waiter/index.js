import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebaseUtils';
import './styles.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';

function Waiter () {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);


  useEffect(() => {
    firebase.firestore()
    .collection('menu')
    //.where('breakfast', '==', 'true')
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

console.log(menu)

const addItem = (item) => {
  console.log(item.price)
  if(order.includes(item)){
    item.quantity += 1
    //item.acum += item.price
    setOrder([...order]);
  } else {
    item.quantity = 1;
    setOrder(current => [...current, item])
  }
}
console.log(order)
console.log(menu)

const subtractItem = (item) => {
  console.log(item.price)
  if(order.includes(item)){
    item.quantity -= 1
    //item.acum += item.price
    setOrder([...order]);
  } else {
    item.quantity = 1;
    setOrder(current => [...current, item])
  }
}

  return (
    <section id="all-menu">
      <Header />
      <h1 id="waiter">Cardápio</h1>
      <div>
        <Button id="btn" name="Café da manhã" />
        <Button id="btn" name="Almoço e Janta" />
      </div>
      <Input label="Nome do cliente: " />
      <ul id="items-list">
      {menu.map(doc => (
        <section id="item-card">
          <p key={doc.id}></p>
          <h3>{doc.name}</h3>
          <div>Quantidade:
          <Button id="quant-btn" name="-" handleClick={() => subtractItem(doc)} />

          { order.map(elem => elem.name === doc.name? elem.quantity : false)}
          <Button id="quant-btn" name="+" handleClick={() => addItem(doc)} />
        </div>
        <p>Preço: R${doc.price},00</p>
      </section>
    ))}
    </ul>

    <Button id="btn"
    //handleClick={saveOrder}
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
  //       table,
  //       counter
  //     })
  //     .then(() => {
  //       setOrder([])
  //       setClient("")
  //       setTable("")
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
