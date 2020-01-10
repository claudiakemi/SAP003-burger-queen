import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebaseUtils';
import './styles.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Link } from "react-router-dom";
let timestamp = new Date();

function Chef () {
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState('Em preparo')

  useEffect(() => {
    firebase.firestore()
    .collection('orders')
    .orderBy('timestamp', 'asc')
    .get()
    .then(
      querySnapshot => {
        const newOrders = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()}))
          setOrders(newOrders)
        }
      )
    },
    []
  );

const orderReady = (doc) => {
  firebase.firestore()
  .collection('orders')
  .doc(doc.id)
  .update({
   orderStatus: 'Pronto',
   timestampReady: timestamp.getTime()
  })
  .then(() => {
    window.location.reload();
  }
  )
}

  return(
    <main id="all">
    <Header />
    <hr id="line"/>
    <h1>Pedidos</h1>
    <div>
    {orders.map(doc => (
      (doc.orderStatus === "Em preparo")?
      <section id="chef-card">
      <p><strong>Mesa: {doc.table} - Cliente: {doc.client} - Horário: {doc.time}</strong></p>
      <hr id="lines"/>
      {doc.order.map(item => (
        <>
        <p>{item.quantity} {item.name} </p>
        <hr id="lines"/>
        </>
      ))}
      <div id="options-info">
      {(doc.option !== "")? <p id="option">{doc.option}</p> : ""}
      {(doc.extra.length !== 0)? <p id="extra">{doc.extra}</p> : ""}
      </div>
      <p>Total: R${doc.total},00</p>
      <Button id="pronto" class="btn" handleClick={() => orderReady(doc)} name="Pedido pronto" />
      </section>
      : <></>
    ))}
    <Link to='/'><Button class="back" name="Voltar"/></Link>
    </div>
    </main>
  )
}

export default Chef
