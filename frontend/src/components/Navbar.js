import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {


  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');

  };

  return (
    <nav className="py-4 bg-white shadow dark:bg-black dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
          Auth System
        </Link>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-yellow-400 transition-colors duration-200"
          >
            <SunIcon className="h-5 w-5" />
          </button>

          <div className="space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700 text-white transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 dark:bg-gray-800 dark:hover:bg-gray-700 text-white transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
