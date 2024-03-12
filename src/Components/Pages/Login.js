
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNewAccount, setIsNewAccount] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  const handleToggleAccountType = () => {
    setIsNewAccount(!isNewAccount);
  };

  return (
    <div className="login-container">
      <h2>{isNewAccount ? 'Create Account' : 'Login'}</h2>

      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {isNewAccount && (
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
        )}

        <button type="submit">{isNewAccount ? 'Create Account' : 'Login'}</button>
      </form>

      <p className="toggle-account-type">
        {isNewAccount ? 'Already have an account? ' : "Don't have an account? "}
        <span onClick={handleToggleAccountType} className="toggle-link">
          {isNewAccount ? 'Login here' : 'Create an account'}
        </span>
      </p>
    </div>
  );
}

export default Login;

