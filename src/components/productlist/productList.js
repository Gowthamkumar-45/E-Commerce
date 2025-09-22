// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../productlist/productlist.css';

function ProductList() {
  const [products, setProducts] = useState([]);

useEffect(() => {
axios.get('http://127.0.0.1:8000/api/v1/products/')
    .then(res => {
      console.log('API response:', res.data); // Debug line
      setProducts(res.data);
    })
    .catch(err => {
      console.error('API error:', err);
      alert('Failed to load products. See console for details.');
    });
}, []);


  return (
    <div>
      <h1 className='product-list-title'>Products</h1>
      <div className='product-list'>
        {products.map(prod => (
          <div key={prod.id} className='product-item'>
            <img src={prod.image} alt={prod.productName} />
            <h3>{prod.productName}</h3>
            <p>Price: ₹{prod.price}</p>
            <Link to={`/products/${prod.id}`}>View details</Link>
            <button className='add-to-cart'>Add to Cart</button>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default ProductList;