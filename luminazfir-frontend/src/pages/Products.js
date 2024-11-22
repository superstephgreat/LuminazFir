import React, { useState } from 'react';
import { useCart } from '../CartContext';
import '../styles/Products.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Products = () => {
    const { addToCart } = useCart();
    const [filters, setFilters] = useState({
        price: '',
        rating: '',
        brand: '',
        wattage: '',
        size: '',
    });

    const [showFilters, setShowFilters] = useState(false); 

    const products = [
        {
            id: 1,
            name: 'Solar Panel Model 1',
            price: 100000,
            rating: 4.5,
            brand: 'SolarTech',
            wattage: '100W',
            size: '1m x 1m',
            image: 'https://via.placeholder.com/300x200?text=Solar+Panel+1',
        },
        {
            id: 2,
            name: 'Solar Panel Model 2',
            price: 120000,
            rating: 4.0,
            brand: 'SunPower',
            wattage: '150W',
            size: '1.5m x 1.5m',
            image: 'https://via.placeholder.com/300x200?text=Solar+Panel+2',
        },
        {
            id: 3,
            name: 'Solar Panel Model 3',
            price: 150000,
            rating: 5.0,
            brand: 'EcoSolar',
            wattage: '200W',
            size: '2m x 2m',
            image: 'https://via.placeholder.com/300x200?text=Solar+Panel+3',
        },
    ];

    const filteredProducts = products.filter((product) => {
        return (
            (!filters.price || product.price <= parseInt(filters.price)) &&
            (!filters.rating || product.rating >= parseFloat(filters.rating)) &&
            (!filters.brand || product.brand === filters.brand) &&
            (!filters.wattage || product.wattage === filters.wattage) &&
            (!filters.size || product.size === filters.size)
        );
    });

    return (
        <div className="products">
            <div className="products-layout">
                {/* Three-dot menu for smaller devices */}
                <button
                    className="menu-toggle"
                    onClick={() => setShowFilters((prev) => !prev)}
                >
                    <i className="fas fa-ellipsis-v"></i>
                </button>

                {/* Filters Section */}
                <div className={`filters ${showFilters ? 'show' : 'hide'}`}>
                    <h4>Filter Products</h4>
                    <div>
                        <label htmlFor="price">Max Price:</label>
                        <input
                            type="number"
                            id="price"
                            value={filters.price}
                            onChange={(e) =>
                                setFilters({ ...filters, price: e.target.value })
                            }
                            placeholder="Enter max price"
                        />
                    </div>
                    <div>
                        <label htmlFor="rating">Minimum Rating:</label>
                        <input
                            type="number"
                            id="rating"
                            step="0.1"
                            value={filters.rating}
                            onChange={(e) =>
                                setFilters({ ...filters, rating: e.target.value })
                            }
                            placeholder="Enter min rating"
                        />
                    </div>
                    <div>
                        <label htmlFor="brand">Brand:</label>
                        <select
                            id="brand"
                            value={filters.brand}
                            onChange={(e) =>
                                setFilters({ ...filters, brand: e.target.value })
                            }
                        >
                            <option value="">All</option>
                            <option value="SolarTech">SolarTech</option>
                            <option value="SunPower">SunPower</option>
                            <option value="EcoSolar">EcoSolar</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="wattage">Wattage:</label>
                        <select
                            id="wattage"
                            value={filters.wattage}
                            onChange={(e) =>
                                setFilters({ ...filters, wattage: e.target.value })
                            }
                        >
                            <option value="">All</option>
                            <option value="100W">100W</option>
                            <option value="150W">150W</option>
                            <option value="200W">200W</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="size">Size:</label>
                        <select
                            id="size"
                            value={filters.size}
                            onChange={(e) =>
                                setFilters({ ...filters, size: e.target.value })
                            }
                        >
                            <option value="">All</option>
                            <option value="1m x 1m">1m x 1m</option>
                            <option value="1.5m x 1.5m">1.5m x 1.5m</option>
                            <option value="2m x 2m">2m x 2m</option>
                        </select>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>₦{product.price}</p>
                            <p>Rating: {product.rating} ★</p>
                            <p>Brand: {product.brand}</p>
                            <p>Wattage: {product.wattage}</p>
                            <p>Size: {product.size}</p>
                            <button
                                className="details-btn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Details
                            </button>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => addToCart(product)}
                            >
                                <i className="fas fa-cart-plus"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
