import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebaseUtils';
import './styles.css';
import Header from '../../components/Header';
import Button from '../../components/Button';

function Chef () {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase.firestore()
    .collection('orders')
    .orderBy('timestamp', 'asc')
    .get()
    .then(
      querySnapshot => {
        const newOrders = querySnapshot.docs.map((doc) => ({
          ...doc.data()}))
          setOrders(newOrders)
        }
      )
    },
    []
  );

return(
  <section id="all">
  <Header />
  <h1>Pedidos</h1>
  <div>
  {orders.map(doc => (
    <section id="order-card">
    <p>Mesa: {doc.table} - Cliente: {doc.client} - Horário: {doc.timestamp}</p>
    {doc.order.map(item => (
      <>
      <p>{item.quantity} {item.name}</p>
      </>
    ))}
    <p>Total: R${doc.total},00</p>
    <Button id="ready" name="Pedido pronto" />
    <hr/>
    </section>
  ))}
  </div>
  </section>
)
}


export default Chef
