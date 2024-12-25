import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import '../styles/checkOut.css';

const CheckOut = () => {
  const { handleSubmit, register } = useForm(); // Register the form fields with react-hook-form
  const cart = useSelector(state => state.cart.products);

  // Calculate the total price
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const onSubmit = (data) => {
    console.log('Order submitted:', data);
    alert("Order submitted");
  };

  return (
    <div className='content'>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='checkout-form'>

        <table className='checkout-table'>
          <tbody>
            <tr>
              <td><label>Name </label></td>
              <td>
                <input
                  type="text"
                  placeholder='Enter your name'
                  {...register('name', { required: true })} // Hook form integration
                />
              </td>
            </tr>
            <tr>
              <td><label>Address </label></td>
              <td>
                <input
                  type="text"
                  placeholder='Enter your address'
                  {...register('address', { required: true })} // Hook form integration
                />
              </td>
            </tr>
            <tr>
              <td><label>Payment</label></td>
              <td>
                <select {...register('payment', { required: true })} required>
                  <option value="" disabled>Select Payment Option</option>
                  <option value="cash_on_delivery">Cash on Delivery</option>
                  <option value="online_payment">Online Payment</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='tpo'>
          <h3>Total Amount </h3>
          <h3>{totalPrice.toFixed(2)}</h3>
          <button type="submit">Place Order</button>
        </div>
      </form>

    </div>
  );
};

export default CheckOut;