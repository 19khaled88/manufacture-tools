import React from 'react';
import { useLocation } from 'react-router-dom';
const OrderPage = () => {
const {state} = useLocation()
 const {price, min} = state
  
  return (
    <div>
    <p>Purchase Page</p>
        <p>Price:{price}</p>
        <p>Min value:{min}</p>
    </div>
  );
}

export default OrderPage;
