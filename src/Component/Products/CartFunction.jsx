import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard'; // Assuming this is in the same folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartFunction = () => {
  const [cartItems, setCartItems] = useState([]);
  const [view, setView] = useState('products');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation

  const handleAddToCart = (product) => {
    try {
      if (!product || !product.price || !product.activeImage || !product.brandName) {
        throw new Error("Product information is incomplete.");
      }
      setCartItems((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleViewCart = () => {
    setView('cart');
  };

  const handleViewProducts = () => {
    setView('products');
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems } }); // Pass cartItems to Checkout page
  };

  const handleDeleteItem = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleQuantityChange = (index, delta) => {
    setCartItems((prevCart) => {
      const updatedCart = [...prevCart];
      const item = updatedCart[index];
      const newQuantity = item.quantity + delta;

      if (newQuantity <= 0) {
        updatedCart.splice(index, 1);
      } else {
        updatedCart[index] = { ...item, quantity: newQuantity };
      }

      return updatedCart;
    });
  };

  const CartPage = () => {
    let totalPrice = 0;

    try {
      totalPrice = cartItems.reduce((total, product) => {
        const price = parseFloat(product.price.replace('₹', ''));
        if (isNaN(price)) {
          throw new Error("Invalid price format.");
        }
        return total + price * product.quantity;
      }, 0);
    } catch (err) {
      setError(err.message);
    }

    return (
      <div className="bit-cart-page">
        <nav className="bit-nav">
          <button className="bit-button" onClick={handleViewProducts}>Back to Products</button>
          <button className="bit-button" onClick={handleCheckout}>Checkout</button>
        </nav>
        <h2 className='cart-heading'>Your Cart</h2>
        {error && <p className="error-message">{error}</p>}
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="bit-cart-items">
            {cartItems.map((product, index) => (
              <div key={index} className="bit-cart-item">
                <img src={product.activeImage} alt={product.brandName} className="bit-cart-item-image"/>
                <div className="bit-cart-item-details">
                  <p className="bit-cart-item-name">{product.brandName}</p>
                  <p className="bit-cart-item-size">Size: {product.sizes[0]}</p>
                  <p className="bit-cart-item-price">Price: {product.price}</p>
                  <div className="bit-cart-item-quantity">
                    <button 
                      className="bit-quantity-button" 
                      onClick={() => handleQuantityChange(index, -1)} 
                      disabled={product.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="bit-quantity-count">{product.quantity}</span>
                    <button 
                      className="bit-quantity-button" 
                      onClick={() => handleQuantityChange(index, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="bit-cart-item-delete" onClick={() => handleDeleteItem(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
            <div className="bit-cart-total">
              <p>Total Price: ₹{totalPrice.toFixed(2)}</p> {/* Display total price in INR */}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bit-app">
      {error && <p className="error-message">{error}</p>}
      {view === 'products' && (
        <ProductCard onAddToCart={handleAddToCart} onViewCart={handleViewCart} />
      )}
      {view === 'cart' && <CartPage />}
    </div>
  );
};

export default CartFunction;
