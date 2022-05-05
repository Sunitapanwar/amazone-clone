import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from './Order'
import './Orders.css'

function Orders() {
  // const [orders, setOrders] = useState([]);
  const [{ user, basket }, dispatch] = useStateValue();

  // useEffect(() => {
  //   db.collection("users")
  //     .doc(user?.uid)
  //     .collection("orders")
  //     .orderBy("created", "desc")
  //     .onSnapshot((snap) => {
  //       setOrders(
  //         snap.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       );
  //     });
  // }, []);

  return (
    <div className="orders">
          <h3 className="orders__heading">Your Orders is Sucessfully Done</h3>
        <Order/>
          
          </div>
  
  );
}

export default Orders;
