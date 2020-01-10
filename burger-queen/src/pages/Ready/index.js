import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebaseUtils';
import './styles.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Link } from "react-router-dom";

function Ready() {
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

  const productionTime = (doc) => {
    const timestamp = (doc.timestampReady - doc.timestamp)/1000;
    const hours = Math.floor((timestamp/60)/60);
    const minutes = Math.floor((timestamp-(hours * 3600))/60);
    const seconds = Math.floor(timestamp-(hours*3600)-(minutes*60));
    return hours + ':' + minutes + ':' +  seconds
  }

  const orderDelivered = (doc) => {
    firebase.firestore()
    .collection('orders')
    .doc(doc.id)
    .update({
     orderStatus: 'Entregue'
    })
    .then(() =>
     window.location.reload()
    )
  }

  return (
    <main id="all">
    <Header />
    <hr id="line"/>
    <h1>Pedidos prontos para entrega</h1>
    <div>
    {orders.map(doc => (
      (doc.orderStatus === "Pronto")?
      <section id="chef-card">
      <p><strong>Mesa: {doc.table} - Cliente: {doc.client} - Tempo de espera: {productionTime(doc)}</strong></p>
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
      <Button id="entregue" class="btn" handleClick={() => orderDelivered(doc)} name="Pedido entregue" />
      </section>
      : <></>
    ))}
    <Link to='/pages/Waiter/index'><Button class="back" name="Voltar"/></Link>
    </div>
    </main>
  )
}

export default Ready
