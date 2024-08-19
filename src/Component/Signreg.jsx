import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (createPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const user = {
      email: loginEmail,
      createpassword: createPassword,
      confirmpassword: confirmPassword
    };

    try {
      const response = await axios.post('http://localhost:8080/users', user);
      console.log('User registered:', response.data);
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }
  };

  return (
    <div className="im-bg-container">
      <div className="im-content-wrapper">
        <div className="im-user-form">
          <h1>Register</h1>
          <input
            type="email"
            className="im-input-email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            className="im-input-password"
            placeholder="Create Password"
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
          />
          <input
            type="password"
            className="im-input-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <input
            type="checkbox"
            className="im-input-checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <span className="im-checkbox-label" >Remember me</span>
          <button onClick={handleLogin}>Create Account</button>
          
          <p>Or Connect With</p>
          <ul>
            <li><i className="fab fa-facebook-f fa-2x"></i></li>
            <li><i className="fab fa-twitter fa-2x"></i></li>
            <li><i className="fab fa-github fa-2x"></i></li>
            <li><i className="fab fa-linkedin-in fa-2x"></i></li>
          </ul>
          <div className="im-clear-fix"></div>
          {/* <span className="im-legal-info">&copy;2024</span> */}
        </div>
      </div>
    </div>
  );
};

export default App;
