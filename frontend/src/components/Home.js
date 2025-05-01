import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const res = await axios.get('http://localhost:5000/api/auth/user', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUser(res.data);
        } catch (err) {
          console.error('Error fetching user:', err);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, [token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white text-center p-8">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to Auth System
      </h1>
      
      {user ? (
        <div>
          <p className="text-xl mb-2">You are logged in!</p>
          <p className="text-lg mb-4">
            Email: {user.email}
          </p>
          <p className="text-lg mb-4">
            Name: {user.name}
          </p>
          {user.googleId && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Logged in with Google
            </p>
          )}
          {user.facebookId && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Logged in with Facebook
            </p>
          )}
          <button
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/';
            }}
            className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="text-xl mb-4">
            Please login or sign up to continue
          </p>
          <div className="space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 dark:bg-gray-900 dark:hover:bg-gray-700 text-white"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 dark:bg-gray-900 dark:hover:bg-gray-700 text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home; 