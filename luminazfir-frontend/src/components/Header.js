import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css"; 

const Header = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  const toggleSearch = () => {
    setSearchActive(!isSearchActive);
  };

  return (
    <header className="header">
      {/* Hamburger Menu */}
      <div
        className="hamburger-menu"
        onClick={toggleSidebar}
        aria-label="Toggle Navigation"
      >
        ☰
      </div>

      {/* Logo */}
      <h1 className="logo">LuminazFir</h1>

      {/* Navigation Links (Sidebar) */}
      <nav className={`nav-links ${isSidebarActive ? "active" : ""}`}>
        {/* Close Button */}
        <button
          className="close-btn"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          ✖
        </button>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Replaced <a href="/" with <Link to="/" */}
          </li>
          <li>
            <Link to="/products">Products</Link> {/* Replaced <a href="/products" with <Link to="/products" */}
          </li>
          <li>
            <Link to="/technicians">Technician Finder</Link> {/* Replaced <a href="/technicians" with <Link to="/technicians" */}
          </li>
          <li>
            <Link to="/educational">Education & Tools</Link> {/* Replaced <a href="/educational" with <Link to="/educational" */}
          </li>
        </ul>
      </nav>

      {/* Right Section: Search and Icons */}
      <div className="right-section">
        {/* Search Button */}
        <button
          className="search-button"
          onClick={toggleSearch}
          aria-label="Toggle Search"
        >
          <i className="fa fa-search"></i>
        </button>

        {/* Search Input */}
        <input
          type="text"
          id="search-input"
          className={isSearchActive ? "active" : ""}
          placeholder="Search"
        />

        {/* Cart and Profile Icons */}
        <div className="icons">
          <Link to="/checkout" aria-label="Cart"> {/* Replaced <a href="/checkout" with <Link to="/checkout" */}
            <i className="fa fa-shopping-cart"></i>
          </Link>
          <Link to="/dashboard" aria-label="Profile"> {/* Replaced <a href="/dashboard" with <Link to="/dashboard" */}
            <i className="fa fa-user"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
