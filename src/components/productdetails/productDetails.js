

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './productDetails.css';

// function ProductDetails() {
//   const { id } = useParams(); // Gets URL param
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/api/v1/productdetails/${id}/`)
//       .then(res => setProduct(res.data))
//       .catch(err => {
//         console.error(err);
//         setProduct(null); // Or set an error state
//       });
//   }, [id]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div className="product-details-container">
//       <div className="product-details-image">
//         <img src={product.image} alt={product.productName} />
//       </div>
//       <div className="product-details-info">
//         <div className="product-details-title">{product.productName}</div>
//         <div className="product-details-price">₹{product.price}</div>
//         <div className="product-details-category">Category: {product.category}</div>
//         <div className="product-details-description">{product.description}</div>
//         <div className="product-details-actions">
//           <button className="product-details-btn">Add to Cart</button>
//           <button className="product-details-btn buy">Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './productDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('highlights');

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/productdetails/${id}/`)
      .then(res => setProduct(res.data))
      .catch(err => {
        console.error(err);
        setProduct(null);
      });
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-details-container">
      <div className="product-details-container">
       <div className="product-details-image">
         <img src={product.image} alt={product.productName} />
       </div>
       <div className="product-details-info">
         <div className="product-details-title">{product.productName}</div>
         <div className="product-details-price">₹{product.price}</div>
         <div className="product-details-category">Category: {product.category}</div>
         <div className="product-details-description">{product.description}</div>
         <div className="product-details-actions">
           <button className="product-details-btn">Add to Cart</button>
          <button className="product-details-btn buy">Buy Now</button>
             </div>
          </div>
        </div>
      
      {/* Detailed Information Tabs */}
      <div className="detailed-info-section">
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'highlights' ? 'active' : ''}`}
            onClick={() => setActiveTab('highlights')}
          >
            Highlights
          </button>
          <button 
            className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('specifications')}
          >
            Specifications
          </button>
          <button 
            className={`tab-btn ${activeTab === 'seller' ? 'active' : ''}`}
            onClick={() => setActiveTab('seller')}
          >
            Seller Information
          </button>
          <button 
            className={`tab-btn ${activeTab === 'payment' ? 'active' : ''}`}
            onClick={() => setActiveTab('payment')}
          >
            Payment Options
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'highlights' && (
            <div className="highlights-section">
              <h3>Highlights</h3>
              <ul className="highlights-list">
                <li>128 GB ROM</li>
                <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                <li>48MP + 12MP | 12MP Front Camera</li>
                <li>A18 Chip, 6 Core Processor</li>
                <li>{product.description}</li>
              </ul>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="specifications-section">
              <h3>Specifications</h3>
              <div className="spec-groups">
                <div className="spec-group">
                  <h4>General</h4>
                  <div className="spec-item">
                    <span className="spec-label">Brand</span>
                    <span className="spec-value">Apple</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Model Name</span>
                    <span className="spec-value">{product.productName}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Color</span>
                    <span className="spec-value">White</span>
                  </div>
                </div>
                
                <div className="spec-group">
                  <h4>Display Features</h4>
                  <div className="spec-item">
                    <span className="spec-label">Display Size</span>
                    <span className="spec-value">15.49 cm (6.1 inch)</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Display Type</span>
                    <span className="spec-value">Super Retina XDR Display</span>
                  </div>
                </div>

                <div className="spec-group">
                  <h4>Memory & Storage Features</h4>
                  <div className="spec-item">
                    <span className="spec-label">Internal Storage</span>
                    <span className="spec-value">128 GB</span>
                  </div>
                </div>

                <div className="spec-group">
                  <h4>Camera</h4>
                  <div className="spec-item">
                    <span className="spec-label">Primary Camera</span>
                    <span className="spec-value">48MP + 12MP</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Secondary Camera</span>
                    <span className="spec-value">12MP Front Camera</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'seller' && (
            <div className="seller-section">
              <h3>Seller Information</h3>
              <div className="seller-info">
                <div className="seller-name">
                  <span>SuperComNet</span>
                  <span className="seller-rating">4.3 ★</span>
                </div>
                <div className="seller-features">
                  <div className="seller-feature">
                    <span>✓ 7 Days Brand Support</span>
                  </div>
                  <div className="seller-feature">
                    <span>✓ GST invoice available</span>
                  </div>
                </div>
                <button className="see-other-sellers">See other sellers</button>
              </div>
            </div>
          )}

          {activeTab === 'payment' && (
            <div className="payment-section">
              <h3>Easy Payment Options</h3>
              <div className="payment-options">
                <div className="payment-option">
                  <h4>EMI Options</h4>
                  <p>EMI starting from ₹1,829/month</p>
                </div>
                <div className="payment-option">
                  <h4>Payment Methods</h4>
                  <p>Net banking & Credit/Debit/ATM card</p>
                </div>
              </div>
              <button className="view-details-btn">View Details</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;