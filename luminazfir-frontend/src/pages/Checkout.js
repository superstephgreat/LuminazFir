import React from 'react';
import { useCart } from '../CartContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="cart">
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₦{item.price}{' '}
                <button className="Remove" onClick={() => removeFromCart(item)
    
                }>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <p>Total: ₦{total}</p>
      </div>
      <div className="checkout-form">
        <h3>Enter Your Details</h3>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="Payment Method" required />
          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
