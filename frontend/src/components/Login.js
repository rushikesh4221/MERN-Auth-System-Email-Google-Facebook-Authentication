import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/'); 
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  const handleFacebookLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/facebook';
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-950 dark:border dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded dark:bg-red-900 dark:text-red-100">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black dark:border-gray-800 dark:text-white"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black dark:border-gray-800 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-blue-500 hover:bg-blue-600 text-white dark:bg-gray-900 dark:hover:bg-gray-700"
          >
            Login
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500 dark:bg-gray-950 dark:text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center px-4 py-2 rounded border dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-700"
            >
              <FaGoogle className="mr-2" />
              Google
            </button>
            <button
              onClick={handleFacebookLogin}
              className="flex items-center justify-center px-4 py-2 rounded border dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-700"
            >
              <FaFacebook className="mr-2" />
              Facebook
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:text-blue-600 dark:text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login; 