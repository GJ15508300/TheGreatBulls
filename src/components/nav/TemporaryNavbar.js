import React, { useState } from 'react';
import AppIcon from '../../assets/images/bull.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Example user object (replace with actual authentication logic)
  const user = {
    name: 'John Doe',
    img: 'https://via.placeholder.com/40', // Replace with user's profile image URL
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex flex-shrink-0 flex-row items-center">
          <img
            src={AppIcon}
            alt="AppIcon"
            className="h-8 w-8"
            // onClick={() => setShowPassword((prev) => !prev)}
          />
            <a href="/" className="text-red-500 font-bold text-xl">
              TheGreatBulls
            </a>
          </div>

<div className='flex flex-row'>
          {/* Menu Button for Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-200 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col md:flex-row md:ml-6 space-y-2 md:space-y-0">
              <a
                href="#"
                className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* User Info / Login Button */}
          <div className="ml-4 flex items-center">
            {user ? (
              <div className="flex items-center space-x-3">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-200 font-medium">{user.name}</span>
              </div>
            ) : (
              <button
                className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium border border-gray-400"
                onClick={() => alert('Redirect to login')} // Replace with actual login function
              >
                Login
              </button>
            )}
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
