import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { cartItems } = location.state || {};
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = React.useState("");
  const [discountedPrice, setDiscountedPrice] = React.useState(null);

  const originalTotalPrice = cartItems
    ? cartItems.reduce((total, product) => {
        const price = parseFloat(product.price.replace("₹", ""));
        return total + price;
      }, 0)
    : 0;

  const handlePromoChange = (e) => {
    setPromoCode(e.target.value);
  };

  const applyPromoCode = () => {
    if (promoCode === "CSD25") {
      const discount = originalTotalPrice * 0.25;
      setDiscountedPrice(originalTotalPrice - discount);
      alert("Promo code applied successfully!");
    } else {
      alert("Invalid promo code.");
      setDiscountedPrice(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyPromoCode();
  };

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handlePlaceOrder = () => {
    const finalPrice = discountedPrice || originalTotalPrice;
    // Navigate to the payment form and pass cart items and final price
    navigate("/payment", { state: { cartItems, totalPrice: finalPrice } });
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <nav>
          <Link to="/cart">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <h2 className="checkout-title">Checkout Form</h2>
        </nav>
      </div>

      <div className="checkout-content">
        <div className="cart-details">
          <h4 className="cart-title">
            <span>Your cart</span>
            <span className="cart-badge">{cartItems ? cartItems.length : 0}</span>
          </h4>
          <ul className="cart-list">
            {cartItems &&
              cartItems.map((product, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-info">
                    <img
                      src={product.activeImage || product.initialImage}
                      alt={product.brandName}
                      className="cart-item-image"
                    />
                    <div>
                      <h4 className="cart-item-brand">{product.brandName}</h4>
                      <small className="cart-item-size">Size: {product.sizes[0]}</small>
                    </div>
                  </div>
                  <span className="cart-item-price">{product.price}</span>
                </li>
              ))}
            <li className="cart-item promo-code">
              <div className="promo-info">
                <h6 className="promo-title">Promo code</h6>
                <small>{promoCode}</small>
              </div>
              <span className="promo-discount">
                -₹{discountedPrice ? (originalTotalPrice - discountedPrice).toFixed(2) : "0.00"}
              </span>
            </li>
            <li className="cart-item total">
              <span>Total (INR)</span>
              <strong>₹{(discountedPrice || originalTotalPrice).toFixed(2)}</strong>
            </li>
          </ul>

          <form className="promo-form" onSubmit={handleSubmit}>
            <div className="promo-input-group">
              <input
                type="text"
                className="promo-input"
                placeholder="Promo code"
                value={promoCode}
                onChange={handlePromoChange}
              />
              <button type="submit" className="promo-redeem-btn">
                Redeem
              </button>
            </div>
          </form>
        </div>

        <div className="shipping-details">
          <form onSubmit={handleSubmit}>
            <h4 className="shipping-title">Shipping Information</h4>
            <div className="shipping-form-group">
              <input
                type="text"
                id="firstName"
                className="shipping-input"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="shipping-form-group">
              <input
                type="text"
                id="lastName"
                className="shipping-input"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="shipping-form-group">
              <input
                type="email"
                id="email"
                className="shipping-input"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="shipping-form-group">
              <input
                type="text"
                id="address"
                className="shipping-input"
                placeholder="Address Line 1"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="shipping-form-group">
              <input
                type="text"
                id="address2"
                className="shipping-input"
                placeholder="Address Line 2 (Optional)"
                value={formData.address2}
                onChange={handleInputChange}
              />
            </div>
            <div className="shipping-form-group">
              <input
                type="text"
                id="city"
                className="shipping-input"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="shipping-form-group">
              <input
                type="text"
                id="state"
                className="shipping-input"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="shipping-form-group">
              <input
                type="text"
                id="zip"
                className="shipping-input"
                placeholder="ZIP Code"
                value={formData.zip}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="shipping-form-group">
              <input
                type="text"
                id="country"
                className="shipping-input"
                placeholder="Country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="button"
              className="shipping-submit-btn"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </form>
        </div>
      </div>

      <footer className="checkout-footer">
        <p className="footer-text">&copy; 2024-2026 Gen-Z Shopping</p>
        <ul className="footer-links">
          <li className="footer-link-item">
            <a href="#">Privacy</a>
          </li>
          <li className="footer-link-item">
            <a href="#">Terms</a>
          </li>
          <li className="footer-link-item">
            <a href="#">Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Checkout;
