import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebaseUtils';
//import Input from '../../components/Input'

function Waiter () {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    firebase.firestore()
    .collection('menu')
    .get()
    .then(querySnapshot => {
      const newMenu = querySnapshot.docs.map((doc) => ({
      ...doc.data()}))
      console.log(newMenu)
      setMenu(newMenu)
    })
  },
  []
);

  return (
    <div>
    <h1 id="waiter">Cardápio</h1>
    <ul>
      {menu.map(doc => (
        <li key={doc.id}>
        {doc.name}
        Preço: R${doc.price},00
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Waiter
