// src/components/Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="sidebar">
      <h2>My App</h2>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/board">Board</Link></li>
        </ul>
      </nav>

      {user && (
        <div className="user-section">
          <p>Hello, <strong>{user}</strong></p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
