import React, { useState } from "react";
import "animate.css";
import { Link } from "react-router-dom";

const Navbar = ({ user, handleLogout }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleProfileHover = () => {
    setIsDropdownVisible(true);
  };

  const handleProfileLeave = () => {
    setIsDropdownVisible(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent p-4 fixed w-full z-50 shadow-md animate__animated animate__fadeInLeft">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Name/Logo */}
        <Link
          to="/"
          className="text-gray-700 text-2xl font-bold animate__animated animate__fadeInLeft hover:text-gray-900"
        >
          VisaHub
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__bounce"
          >
            Home
          </Link>
          <Link
            to="/all-visas"
            className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__bounce"
          >
            All Visas
          </Link>

          {/* Protected Routes */}
          {user && (
            <>
              <Link
                to="/add-visa"
                className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__bounce"
              >
                Add Visa
              </Link>
              <Link
                to="/my-added-visas"
                className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__bounce"
              >
                My Added Visas
              </Link>
              <Link
                to="/my-visa-applications"
                className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__bounce"
              >
                My Visa Applications
              </Link>
            </>
          )}
        </div>

        {/* Conditional Login/Register or User Profile (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          {!user ? (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__rubberBand"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__rubberBand"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <div
                onMouseEnter={handleProfileHover}
                onMouseLeave={handleProfileLeave}
                className="cursor-pointer"
              >
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full animate__animated animate__fadeInRight border-2 border-gray-700 hover:border-gray-900"
                />
              </div>

              {/* Dropdown for Display Name and Logout */}
              {isDropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg animate__animated animate__fadeIn">
                  <div className="p-4">
                    <p className="text-gray-800 font-semibold">
                      {user.displayName}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="mt-2 w-full bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__bounce"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/all-visas"
              className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__bounce"
              onClick={toggleMobileMenu}
            >
              All Visas
            </Link>

            {/* Protected Routes */}
            {user && (
              <>
                <Link
                  to="/add-visa"
                  className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__bounce"
                  onClick={toggleMobileMenu}
                >
                  Add Visa
                </Link>
                <Link
                  to="/my-added-visas"
                  className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__bounce"
                  onClick={toggleMobileMenu}
                >
                  My Added Visas
                </Link>
                <Link
                  to="/my-visa-applications"
                  className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__bounce"
                  onClick={toggleMobileMenu}
                >
                  My Visa Applications
                </Link>
              </>
            )}

            {/* Conditional Login/Register or User Profile */}
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__rubberBand"
                  onClick={toggleMobileMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-gray-900 animate__animated hover:animate__rubberBand"
                  onClick={toggleMobileMenu}
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative">
                <div
                  onMouseEnter={handleProfileHover}
                  onMouseLeave={handleProfileLeave}
                  className="cursor-pointer"
                >
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-10 h-10 rounded-full animate__animated animate__fadeInRight border-2 border-gray-700 hover:border-gray-900"
                  />
                </div>

                {/* Dropdown for Display Name and Logout */}
                {isDropdownVisible && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg animate__animated animate__fadeIn">
                    <div className="p-4">
                      <p className="text-gray-800 font-semibold">
                        {user.displayName}
                      </p>
                      <button
                        onClick={handleLogout}
                        className="mt-2 w-full bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;