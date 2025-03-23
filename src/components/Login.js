// src/components/Login.js
import React, { useState } from 'react';
import './Login.css'; // ✅ Import the Login styles

function Login() {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username) {
      localStorage.setItem('user', username);
      window.location.href = '/board'; // Redirect to board page
    }
  };

  return (
    <div className="login-container"> {/* ✅ Apply CSS class */}
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
