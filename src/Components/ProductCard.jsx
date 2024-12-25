import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      
      <h4>Price: {product.price}</h4>
      <button onClick={onAddToCart}>Add to Cart</button> <br />

      <Link to={`/product/${product.id}`} className='view-detail'>View Details</Link>
    </div>
  );
};

export default ProductCard;
