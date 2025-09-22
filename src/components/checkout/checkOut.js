// src/components/Checkout.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Checkout() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    axios.get('/api/cart/', {
      headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
    })
      .then(res => setCart(res.data))
      .catch(err => console.error(err));
  }, []);

  const placeOrder = () => {
    axios.post('/api/orders/', {}, {
      headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
    })
      .then(() => alert('Order placed successfully!'))
      .catch(() => alert('Failed to place order'));
  };

  if (!cart) return <p>Loading...</p>;

  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <h1>Checkout</h1>
      <p>Total items: {totalItems}</p>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;
