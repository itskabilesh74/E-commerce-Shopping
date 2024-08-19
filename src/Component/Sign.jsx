import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = {
      email: loginEmail,
      createpassword: loginPassword,
    };

    try {
      const response = await axios.post('http://localhost:8080/users/validate', user);
      console.log('User logged in:', response.data);

      
      localStorage.setItem('user', JSON.stringify(response.data));

     
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        setErrorMessage(error.response.data); 
      } else if (error.request) {
        console.error('No response received:', error.request);
        setErrorMessage('No response received from the server');
      } else {
        console.error('Error setting up request:', error.message);
        setErrorMessage('An error occurred while setting up the request');
      }
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  useEffect(() => {
    document.body.classList.add('custom-body');
    return () => {
      document.body.classList.remove('custom-body');
    };
  }, []);

  return (
    <div className="custom-container">
      <div className="custom-login">
        <div className="custom-container">
          <h1>Log in</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            className="input-login"
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            className="input-password"
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <br />
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <span>Remember me</span>
          <a href="#">Forgot password?</a>
          <button onClick={handleLogin}>Log in</button>
          <hr />
          <p className="signin-para">Or Connect With</p>
          <hr />
          <ul>
            <li><i className="fab fa-facebook-f fa-2x"></i></li>
            <li><i className="fab fa-twitter fa-2x"></i></li>
            <li><i className="fab fa-github fa-2x"></i></li>
            <li><i className="fab fa-linkedin-in fa-2x"></i></li>
          </ul>
          <div className="custom-clearfix"></div>
          <span className="copyright">&copy;2019</span>
        </div>
      </div>
      <div className="custom-register">
        <div className="custom-container">
          <i className="fas fa-user-plus fa-5x"></i>
          <h2>Hello, friend!</h2>
          <p>Enter your personal details and start your journey with us</p>
          <button onClick={handleRegister}>
            Register <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
