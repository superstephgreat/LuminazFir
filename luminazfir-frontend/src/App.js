import '@fontsource/roboto';
import '@fontsource/poppins';
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Products from './pages/Products';
import TechnicianFinder from './pages/TechnicianFinder';
import Checkout from './pages/Checkout';
import Educational from './pages/Educational';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Header/Navbar to appear on all pages */}
        <Header />
        
        {/* Defined routes for the pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/technicians" element={<TechnicianFinder />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/educational" element={<Educational />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        {/* Footer to appear on all pages */}
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
