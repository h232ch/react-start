// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>My App</h2>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/board">Board</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
