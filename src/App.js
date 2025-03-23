// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Board from './pages/Board';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/board/*" element={<Board />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

