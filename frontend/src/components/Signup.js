import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/';
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-950 dark:border dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-black dark:border-gray-800 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-black dark:border-gray-800 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-black dark:border-gray-800 dark:text-white"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-black dark:border-gray-800 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-green-500 hover:bg-green-600 text-white dark:bg-gray-900 dark:hover:bg-gray-700"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-gray-500 hover:text-gray-600 dark:text-gray-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup; 