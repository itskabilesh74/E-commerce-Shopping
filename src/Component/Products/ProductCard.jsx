import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ onAddToCart, onViewCart }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  
  const products = [
    {
      id: 1,
      brandName: 'H & M Round Neck',
      initialImage: 'https://i.imgur.com/vuTSHe3.png',
      price: '₹5',  
      sizes: ['36', '38', '40', '42'],
      colors: [
        { color: '#cab7a2', src: 'https://i.imgur.com/a31ZhsD.png' },
        { color: '#532e35', src: 'https://i.imgur.com/vuTSHe3.png' },
        { color: '#7f8cab', src: 'https://i.imgur.com/TT6hsaQ.png' },
      ],
    },
    {
      id: 2,
      brandName: 'Mast & Harbour',
      initialImage: 'https://i.imgur.com/C5DUqYu.png',
      price: '₹1499',  
      sizes: ['36', '38', '40', '42'],
      colors: [
        { color: '#f5d3ca', src: 'https://i.imgur.com/m6qrQtW.png' },
        { color: '#6c623f', src: 'https://i.imgur.com/C5DUqYu.png' },
        { color: '#2d2c32', src: 'https://i.imgur.com/xbOCNap.png' },
      ],
    },
    {
      id: 3,
      brandName: 'Adidas',
      initialImage: 'https://i.imgur.com/g6xpIKQ.png',
      price: '₹1587',  
      sizes: ['36', '38', '40', '42'],
      colors: [
        { color: '#0a5457', src: 'https://i.imgur.com/s2PKM1j.png' },
        { color: '#b50a1d', src: 'https://i.imgur.com/g6xpIKQ.png' },
        { color: '#fe911a', src: 'https://i.imgur.com/GkBF14L.png' },
      ],
    },
    {
      id: 4,
      brandName: 'Adidas',
      initialImage: 'https://i.imgur.com/GkBF14L.png',
      price: '₹1977',  
      sizes: ['36', '38', '40', '42'],
      colors: [
        { color: '#fe911a', src: 'https://i.imgur.com/GkBF14L.png' },
        { color: '#0a5457', src: 'https://i.imgur.com/s2PKM1j.png' },
        { color: '#b50a1d', src: 'https://i.imgur.com/g6xpIKQ.png' },
      ],
    },
    {
      id: 5,
      brandName: 'H & M Round Neck',
      initialImage: 'https://i.imgur.com/vuTSHe3.png',
      price: '₹1680',  
      sizes: ['36', '38', '40', '42'],
      colors: [
        { color: '#cab7a2', src: 'https://i.imgur.com/a31ZhsD.png' },
        { color: '#532e35', src: 'https://i.imgur.com/vuTSHe3.png' },
        { color: '#7f8cab', src: 'https://i.imgur.com/TT6hsaQ.png' },
      ],
    },
    {
      id: 6,
      brandName: 'Mast & Harbour',
      initialImage: 'https://i.imgur.com/xbOCNap.png',
      price: '₹1299',  
      sizes: ['36', '38', '40', '42'],
      colors: [
        { color: '#f5d3ca', src: 'https://i.imgur.com/m6qrQtW.png' },
        { color: '#6c623f', src: 'https://i.imgur.com/C5DUqYu.png' },
        { color: '#2d2c32', src: 'https://i.imgur.com/xbOCNap.png' },
      ],
    },
    {
      id: 7,
      brandName: 'Uniqlo Soft T-shirt',
      initialImage: 'https://i.imgur.com/ajXAH8k.jpeg', 
      price: '₹950',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { color: '#e0f7fa', src: 'https://i.imgur.com/ajXAH8k.jpeg' }, 
        { color: '#b2ebf2', src: 'https://i.imgur.com/RBh0cgb.jpeg' }, 
        { color: '#80deea', src: 'https://i.imgur.com/PWd8S6V.jpeg' }, 
      ]
    },
    {
      id: 8,
      brandName: 'Uniqlo Soft T-shirt',
      initialImage: 'https://i.imgur.com/REmPHHE.jpeg',
      price: '₹950',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { color: '#e0f7fa', src: 'https://i.imgur.com/REmPHHE.jpeg' },
        { color: '#b2ebf2', src: 'https://i.imgur.com/7pIbtlR.jpeg' },
        { color: '#80deea', src: 'https://i.imgur.com/OBkgbmA.jpeg' },
      ],
    },
    {
      id: 9,
      brandName: 'Levi’s Denim Jacket',
      initialImage: 'https://i.imgur.com/lDriiLA.jpeg',
      price: '₹2200',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: [
        { color: '#6a4c41', src: 'https://i.imgur.com/lDriiLA.jpeg' },
        { color: '#c0ca33', src: 'https://i.imgur.com/EBWQ274.jpeg' },
        { color: '#90a4ae', src: 'https://i.imgur.com/MQY1iUN.jpeg' },
      ],
    },
  ];

  const [activeImages, setActiveImages] = useState(
    products.map((product) => product.initialImage)
  );

  const handleColorClick = (productIndex, colorIndex) => {
    const newActiveImages = [...activeImages];
    newActiveImages[productIndex] =
      products[productIndex].colors[colorIndex].src;
    setActiveImages(newActiveImages);
  };

  const handleAddToCart = (product, productIndex) => {
    const updatedProduct = {
      ...product,
      activeImage: activeImages[productIndex],
    };
    onAddToCart(updatedProduct);
    alert(`Added ${product.brandName} to cart`);
  };

  const handleCartClick = () => {
    if (isLoggedIn) {
      onViewCart();
    } else {
      alert('You need to be logged in to view the cart.');
    }
  };

  return (
    <div className="shop-app">
      <nav>
        <Link to='/collection'><i className="fa-solid fa-arrow-left"></i></Link>
        <i className="fa-solid fa-cart-shopping" onClick={handleCartClick}></i>
      </nav>
      <div className="product-container">
        {products.map((product, productIndex) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={activeImages[productIndex]} alt={product.brandName} />
              <p className="product-title">{product.brandName}</p>
            </div>
            <div className="product-details">
              <div className="product-title">SIZE & COLOR</div>
              <div className="size-list">
                <ul>
                  {product.sizes.map((size) => (
                    <li key={size} className="size-item">
                      <span>{size}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="color-list">
                <ul>
                  {product.colors.map((color, colorIndex) => (
                    <li
                      key={color.color}
                      style={{ backgroundColor: color.color }}
                      className={`color-item ${
                        activeImages[productIndex] === color.src ? 'active' : ''
                      }`}
                      onClick={() => handleColorClick(productIndex, colorIndex)}
                    ></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="product-price">
              <p>{product.price}</p>  
            </div>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product, productIndex)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <footer className="checkout-footer">
        <p className="footer-text">&copy; 2024-2026 Gen-Z Shopping</p>
        <ul className="footer-links">
          <li className="footer-link-item"><a href="#">Privacy</a></li>
          <li className="footer-link-item"><a href="#">Terms</a></li>
          <li className="footer-link-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default ProductCard;
