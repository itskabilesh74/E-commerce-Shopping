import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const PaymentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems, totalPrice } = location.state || {};

  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
    postalCode: ''
  });

  const [showQRCode, setShowQRCode] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Payment Submitted');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleGPayClick = () => {
    setShowQRCode(true);
  };

  const handleCloseModal = () => {
    setShowQRCode(false);
  };

  const upiId = 'kabileshoffl@oksbi'; // Replace with actual UPI ID
  const upiUrl = `upi://pay?pa=${upiId}&pn=Gen-ZShopping&am=${totalPrice}&cu=INR`; // Construct UPI payment URL

  return (
    <div className="pay-body">
      <div className="pay-container">
        <div className="pay-content">
          <button className="pay-back-button" onClick={handleBackClick}>
            <i className="fas fa-arrow-left"></i> {/* Back icon */}
          </button>
          <div className="pay-summary-section">
            <h3 className="pay-summary-title">Order Summary</h3>
            <ul className="pay-summary-list">
              {cartItems?.map((product, index) => (
                <li key={index} className="pay-summary-item">
                  <img 
                    src={product.activeImage || product.initialImage} 
                    alt={product.brandName} 
                    className="pay-summary-item-image"
                  />
                  <div className="pay-summary-item-details">
                    <span className="pay-summary-item-name">{product.brandName}</span>
                    <div className="pay-summary-item-info">
                      <span className="pay-summary-item-size">Size: {product.sizes[0]}</span>
                    </div>
                    {product.discountPrice ? (
                      <div className="pay-summary-item-prices">
                        <span className="pay-summary-item-price-discount">₹{product.discountPrice}</span>
                        <span className="pay-summary-item-price-original">₹{product.price}</span>
                      </div>
                    ) : (
                      <span className="pay-summary-item-price">{product.price}</span>
                    )}
                  </div>
                </li>
              ))}
              <li className="pay-summary-total">
                <span>Total</span>
                <strong>₹{totalPrice.toFixed(2)}</strong>
              </li>
            </ul>
            <div className="pay-payment-methods">
              <button className="pay-payment-method">Cash on Delivery</button>
            </div>
          </div>

          <div className="pay-details-section">
            <h2 className="pay-title">Payment Details</h2>
            <div className="pay-methods">
              <button className="pay-method">PayPal</button>
              <button className="pay-method" onClick={handleGPayClick}>G Pay</button>
            </div>
            <div className="pay-divider">or checkout using a credit card</div>
            <form onSubmit={handleSubmit} className="pay-form">
              <div className="pay-form-group">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="pay-form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="pay-form-row">
                <div className="pay-form-group">
                  <label>Expiration</label>
                  <input
                    type="text"
                    name="expiration"
                    placeholder="MM/YY"
                    value={formData.expiration}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="pay-form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="pay-form-group">
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="pay-payment-button">
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal for QR Code */}
      <Modal
        isOpen={showQRCode}
        onRequestClose={handleCloseModal}
        contentLabel="Google Pay QR Code"
        className="pay-modal"
        overlayClassName="pay-modal-overlay"
      >
        <div className="pay-modal-content">
          <h3 className="pay-modal-title">Scan to Pay with Google Pay</h3>
          <QRCode value={upiUrl} size={200} />
          <button className="pay-modal-close-button" onClick={handleCloseModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentForm;
