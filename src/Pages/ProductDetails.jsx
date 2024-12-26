import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../styles/productDetails.css"

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <h1>Product Details</h1>
      <div className='prdctdtl'>
        <div className='img'>
          <img src={product.image} alt={product.name} />
        </div>
        <div className='pinfo'>
          <h2>{product.title}</h2>
          <p className="price">Amount  {product.price}</p>
          <h3>Description</h3>
            <p>{product.description}</p>
            <p>Category: {product.category} </p>
            <p>Rating: {product.rating.rate} </p>
        </div>
      </div>


      {/* <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="price">Price: {product.price}</p>
          <div className="description">
            <h3>Description</h3>
            <p>{product.description}</p>
            <p>Category: {product.category} </p>
            <p>Rating: {product.rating.rate} </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProductDetails;
