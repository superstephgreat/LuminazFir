import React, { useState } from "react";
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/technicians">Technician Finder</a>
          </li>
          <li>
            <a href="/educational">Education & Tools</a>
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
          <a href="/checkout" aria-label="Cart">
            <i className="fa fa-shopping-cart"></i>
            
          </a>
          <a href="/dashboard" aria-label="Profile">
            <i className="fa fa-user"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
