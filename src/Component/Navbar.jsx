import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const [user, setUser] = useState(null); // State to track user login
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user data exists in local storage on component mount
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    const showNavbar = () => setNavVisible(true);
    const closeNavbar = () => setNavVisible(false);

    const handleLogout = () => {
        // Clear user data from local storage and update state
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div>
            <nav className="header-bar">
                <h1 className="header-title">Gen-Z</h1>

                <div className="header-links">
                    <p className="header-link">
                        <a href="/">Home</a>
                    </p>
                    <p className="header-link">
                        <a href="/collection">Collections</a>
                    </p>
                    <p className="header-link">
                        <a href="/contact">Contact</a>
                    </p>
                    {!user ? (
                        <p className="header-link">
                            <a href="/login">Login</a>
                        </p>
                    ) : (
                        <div className="user-menu">
                            <span>Welcome {user.username}!</span>
                            <button onClick={handleLogout} className="logout-button">Logout</button>
                        </div>
                    )}
                </div>

                <div className="header-menu-toggle" onClick={showNavbar}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>

            {isNavVisible && (
                <div className="vertical-menu">
                    <p className="close-icon" onClick={closeNavbar}>
                        <i className="fa-solid fa-xmark"></i>
                    </p>

                    <div className="vertical-menu-links">
                        <p className="vertical-menu-item">
                            <a href="/">Home</a>
                        </p>
                        <p className="vertical-menu-item">
                            <a href="/collection">Collections</a>
                        </p>
                        <p className="vertical-menu-item">
                            <a href="/contact">Contact</a>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
