import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/navbar.css'; 

const Navbar = () => {
  const cart = useSelector(state => state.cart.products);
  const totalItems = cart.reduce((total, product) => total + product.quantity, 0); 

  return (
    <>
    <nav className="navbar">
        <h2>TECH HAVEN</h2>
    </nav>
     <div className="navbar-links">
        <div>
          <Link to="/">Home</Link>
           <Link to="/cart">Cart {totalItems > 0 && <span className="cart-count">{totalItems}</span>}</Link>
        </div>
        <div>
            <Link to="/checkout">Checkout</Link>
        </div>
      </div>
    </> 
  );
};
export default Navbar;
