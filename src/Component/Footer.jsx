import React, { useState } from 'react';

// Newsletter Component
const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        // Handle subscription logic here
        alert(`Subscribed with email: ${email}`);
    };

    return (
        <div className="news">
            <h2>Join our newsletter</h2>
            <p>Signup for our email newsletter to get exclusive discounts and updates and more</p>
            <div>
                <input 
                    type="text" 
                    className="search" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
            </div>
            <div>
                <button onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
    );
};

// Footer Component
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-box-1">
                    <h2 className="headingText">Gen-Z</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, enim consequuntur. Ullam!</p>
                </div>
                <div className="footer-icon-container">
                    <i className="fa-brands fa-instagram" style={{ color: '#ffffff' }}></i>
                    <i className="fa-brands fa-facebook" style={{ color: '#ffffff' }}></i>
                    <i className="fa-brands fa-twitter" style={{ color: '#ffffff' }}></i>
                </div>
            </div>
            <p>@2024 Nostra.com</p>
        </div>
    );
};

// Main App Component
const App = () => {
    return (
        <div>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default App;
