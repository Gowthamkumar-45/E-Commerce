import './App.css';
import Cart from './components/carts/cart.js';
import Checkout from './components/checkout/checkOut.js';
import ProductDetails from './components/productdetails/productDetails.js';
import ProductList from './components/productlist/productList.js';   
import { Routes, Route, Link } from 'react-router-dom';

function App() {
 
  return (
    <>

      <div className="flipkart-navbar">
        <div className="nav-top">
          <div className="logo">
            <h1 className="logo-text">My Ecommerce site</h1>
          </div>
          
          <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search for Products, Brands and More" />
            <button className="search-btn"><i className="fas fa-search"></i></button>
          </div>
          
          <div className="nav-actions">
            <button className="nav-btn"><i className="fas fa-user"></i> Login</button>
            <Link to="/cart" className="nav-btn"><i className="fas fa-cart-shopping"></i> Cart</Link>
          </div>
        </div>
        
        <div className="nav-bottom">
          <div className="dropdown">
            <div className="nav-category">
              Electronics <i className="fas fa-chevron-down"></i>
            </div>
            <div className="dropdown-content">
              <Link to="#">Mobiles</Link>
              <Link to="#">Laptops</Link>
              <Link to="#">Headphones</Link>
              <Link to="#">Cameras</Link>
            </div>
          </div>
          
          <div className="dropdown">
            <div className="nav-category">
              Fashion <i className="fas fa-chevron-down"></i>
            </div>
            <div className="dropdown-content">
              <Link to="#">Men's Clothing</Link>
              <Link to="#">Women's Clothing</Link>
              <Link to="#">Baby & Kids</Link>
              <Link to="#">Footwear</Link>
              <Link to="#">Accessories</Link>
            </div>
          </div>
          
          <Link to="#" className="nav-category">TVs & Appliances</Link>
          <Link to="#" className="nav-category">Home & Furniture</Link>
          <Link to="#" className="nav-category">Sports, Books & More</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;