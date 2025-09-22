// src/components/Cart.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cart() {
  const [cart, setCart] = useState(null);

  const fetchCart = () => {
    axios.get('/api/cart/', {
      headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
    })
      .then(res => setCart(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQty = (itemId, qty) => {
    axios.put(`/api/cart/${itemId}/update_item/`, { quantity: qty }, {
      headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
    })
      .then(() => fetchCart())
      .catch(err => alert('Failed to update quantity'));
  };

  const removeItem = (itemId) => {
    axios.delete(`/api/cart/${itemId}/remove_item/`, {
      headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
    })
      .then(() => fetchCart())
      .catch(err => alert('Failed to remove item'));
  };

  if (!cart) return <p>Loading cart...</p>;

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.items.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {cart.items.map(item => (
            <li key={item.id}>
              Product ID: {item.product} {/* You can fetch more product details if needed */}
              <br />
              Quantity: <input type="number" value={item.quantity} min="1"
                onChange={(e) => updateQty(item.id, Number(e.target.value))} />
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
