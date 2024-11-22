import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="home">
      {/* Sliding Hero Section */}
      <section className="hero-slider">
        <Slider {...settings}>
          <div className="slide">
            <h1>Welcome to LuminazFir</h1>
            <p>Explore solar panels for a sustainable future</p>
            <Link to="/products"><button className="cta-btn">Shop Now</button></Link> 
          </div>
          <div className="slide">
            <h1>Join the Solar Revolution</h1>
            <p>Empowering homes with clean energy</p>
            <Link to="/products"><button className="cta-btn">Learn More</button></Link> 
          </div>
          <div className="slide">
            <h1>Switch to Renewable Energy</h1>
            <p>Affordable solar panels for every household</p>
            <Link to="/products"><button className="cta-btn">Get Started</button></Link>   
          </div>
        </Slider>
      </section>

      {/* Product Categories Section */}
      <section className="product-categories">
        <h2 className="category-title">Explore Our Products</h2>

        {/* New Arrivals */}
        <div className="category">
          <h3>New Arrivals</h3>
          <div className="product-grid">
            <div className="product-item">
              <img src="https://via.placeholder.com/300x200?text=Solar+Panel+1" alt="Solar Panel 1" />
              <h4>Solar Panel A</h4>
              <p>₦29,900</p>
              <button className="cta-btn">View Details</button>
            </div>
            <div className="product-item">
              <img src="https://via.placeholder.com/300x200?text=Solar+Panel+2" alt="Solar Panel 2" />
              <h4>Solar Panel B</h4>
              <p>₦34,900</p>
              <button className="cta-btn">View Details</button>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="category">
          <h3>Featured Products</h3>
          <div className="product-grid">
            <div className="product-item">
              <img src="https://via.placeholder.com/300x200?text=Solar+Panel+1" alt="Solar Panel 3" />
              <h4>Solar Panel C</h4>
              <p>₦39,900</p>
              <button className="cta-btn">View Details</button>
            </div>
            <div className="product-item">
              <img src="https://via.placeholder.com/300x200?text=Solar+Panel+2" alt="Solar Panel 4" />
              <h4>Solar Panel D</h4>
              <p>₦49,900</p>
              <button className="cta-btn">View Details</button>
            </div>
          </div>
        </div>

        {/* Trending Products */}
        <div className="category">
          <h3>Trending Now</h3>
          <div className="product-grid">
            <div className="product-item">
              <img src="https://via.placeholder.com/300x200?text=Solar+Panel+1" alt="Solar Panel 5" />
              <h4>Solar Panel E</h4>
              <p>₦27,900</p>
              <button className="cta-btn">View Details</button>
            </div>
            <div className="product-item">
              <img src="https://via.placeholder.com/300x200?text=Solar+Panel+2" alt="Solar Panel 6" />
              <h4>Solar Panel F</h4>
              <p>₦39,900</p>
              <button className="cta-btn">View Details</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
