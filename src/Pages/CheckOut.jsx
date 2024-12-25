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
      <form onSubmit={handleSubmit(onSubmit)} className='checkout-form'>
        <h1>Checkout</h1>
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
        <h3>Total Price: {totalPrice.toFixed(2)}</h3> {/* Formatting the price */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckOut;
