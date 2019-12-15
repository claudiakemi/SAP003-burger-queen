import React from 'react';
import firebase from '../../utils/firebaseUtils';

function Waiter () {
  firebase.firestore().collection('menu').get().then(function(doc){ console.log(doc)})
  //.onSnapshot(querySnapshot);

  // => {
  //   querySnapshot.forEach((element) => {
  //
  //   })
  // }
// )


  return (
  <h1 id="waiter">Cardápio</h1>
  )
}
export default Waiter
