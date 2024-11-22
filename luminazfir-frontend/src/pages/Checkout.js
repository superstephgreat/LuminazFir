import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext'; 
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'; 

const Dashboard = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.length > 0 ? cart.reduce((sum, item) => sum + item.price, 0) : 0;

  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    orderHistory: [
      { orderId: 1, date: '2024-10-12', total: 200000, items: [{ id: 'p1', name: 'Solar Panel', price: 100000 }] },
      { orderId: 2, date: '2024-10-15', total: 150000, items: [{ id: 'p2', name: 'Solar Battery', price: 150000 }] },
    ],
    techniciansBooked: [
      { name: 'Mike Johnson', location: 'Lagos', contact: '08000000000' },
      { name: 'Sarah Lee', location: 'Abuja', contact: '09000000000' },
    ],
  });

  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  useEffect(() => {
    // Fetch user data from an API or local storage 
    // setUser(fetchedData);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarMinimized(prevState => !prevState);
  };

  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard, {user.name}</h2>

      {/* Three-dot menu icon to toggle sidebar */}
      <div className="menu-icon" onClick={toggleSidebar}>
        &#9776; {/* This is the hamburger icon (☰) */}
      </div>

      {/* Sidebar Navigation */}
      <div className={`sidebar ${isSidebarMinimized ? 'minimized' : ''}`}>
        <ul>
          <li><a href="#account-info">Account Information</a></li>
          <li><a href="#order-history">Order History</a></li>
          <li><a href="#technicians-booked">Technicians Booked</a></li>
          <li><a href="#cart">Your Cart</a></li>
          <li><a href="#account-settings">Account Settings</a></li>
        </ul>
      </div>

      {/* Account Information Section */}
      <div id="account-info" className="user-info">
        <h3>Account Information</h3>
        <p>Email: {user.email}</p>
        <Link to="/profile-settings">Edit Profile</Link>
      </div>

      {/* Order History Section */}
      <div id="order-history" className="order-history">
        <h3>Your Order History</h3>
        <div className="order-cards">
          {user.orderHistory.map((order) => (
            <div className="order-card" key={order.orderId}>
              <p>Order #{order.orderId} - ₦{order.total}</p>
              <p>Placed on: {order.date}</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - ₦{item.price}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Technicians Booked Section */}
      <div id="technicians-booked" className="technicians-booked">
        <h3>Technicians Booked</h3>
        <div className="technician-cards">
          {user.techniciansBooked.map((technician, index) => (
            <div className="technician-card" key={index}>
              <h4>{technician.name}</h4>
              <p>Location: {technician.location}</p>
              <p>Contact: {technician.contact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shopping Cart Section */}
      <div id="cart" className="cart-summary">
        <h3>Your Cart</h3>
        <div className="cart-cards">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <p>{item.name}</p>
                <p>Price: ₦{item.price}</p>
                <button className="Remove" onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <Link to="/checkout">Go to Checkout</Link>
      </div>

      {/* Account Settings */}
      <div id="account-settings" className="settings">
        <Link to="/settings">Account Settings</Link>
        <br />
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
};

export default Dashboard;
