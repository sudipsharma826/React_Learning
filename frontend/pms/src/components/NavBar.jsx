import React, { useState } from 'react'; // Import useState for managing menu open state
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu open state
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen} // Control aria-expanded state
                onClick={toggleMenu} // Call toggleMenu on click
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

            {/* Logo and Nav Links */}
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
              {/* Logo in mobile view */}
              <div className="flex flex-shrink-0 items-center">
                <img className="h-12 w-auto ml-9" src="/images/logo.png" alt="Sudip Sharma" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link to="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">
                    Dashboard
                  </Link>
                  <Link to="/product" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">
                    Product
                  </Link>
                  <Link to="/about" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">
                    About Developer
                  </Link>
                  <Link to="/addproduct" className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700">
                    + Add Product
                  </Link>
                </div>
              </div>
            </div>

            {/* Profile Image, Login, and Logout */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile */}
              <div className="relative ml-3 flex items-center space-x-3">
              <Link
                  to="/logout"
                  className="inline-flex items-center rounded-md bg-red-500 px-4 py-1 text-base font-medium text-white hover:bg-red-600"
                >
                  <i className="fa-solid fa-right-from-bracket mr-2"></i> Logout
                </Link>
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-haspopup="true"
                >
                  <img className="h-8 w-8 rounded-full" src="/images/profile.png" alt="Profile" />
                </button>
                
                {/* Login Button */}
                <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                  <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.35 11.1h-9.15v2.75h5.6a4.8 4.8 0 0 1-2.05 3.15v2.6h3.3a8.62 8.62 0 0 0 2.35-8.5ZM12.2 21.9a8.1 8.1 0 0 0 5.5-2.05l-3.3-2.6a4.9 4.9 0 0 1-7.3-2.6H3.7v2.75A8.2 8.2 0 0 0 12.2 21.9Zm-4.9-7.1a4.85 4.85 0 0 1 0-3.15V8h-3.6a8.25 8.25 0 0 0 0 7.05ZM12.2 7.95a4.4 4.4 0 0 1 2.65 1l2.05-2.05A7.85 7.85 0 0 0 12.2 3.9a8.2 8.2 0 0 0-7.55 5.1l3.35 2.6a4.85 4.85 0 0 1 4.2-3.65Z" />
                  </svg>
                  <span>Login</span>
                </button>
                {/* Logout Button */}
               
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu"> {/* Conditionally render menu */}
          <div className="flex flex-col items-center space-y-1 px-2 pb-3 pt-2">
            {/* Logo in mobile view */}
          
            <Link to="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">
              Dashboard
            </Link>
            <Link to="/product" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700">
              Product
            </Link>
            <Link to="/about" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700">
              About Developer
            </Link>
            <Link to="/addproduct" className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700">
              + Add Product
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
