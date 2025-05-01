import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AuthCallback from './components/AuthCallback';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">
      <Router>
        <Navbar  />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/signup" element={<Signup  />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App; 