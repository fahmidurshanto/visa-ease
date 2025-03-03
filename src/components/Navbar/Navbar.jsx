import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/visa_ease_logo.png";

const Navbar = ({ isLoggedIn, user, handleLogout }) => {
  return (
    <nav className="bg-white shadow-lg text-gray-600">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Website Name/Logo */}
        <Link
          to="/"
          className="text-gray-600 text-2xl font-bold animate__animated animate__fadeInLeft"
        >
          <img src={logo} className="w-32 h-24" alt="VISA EASE" />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-500 transition duration-300 animate__animated animate__pulse"
          >
            Home
          </Link>
          <Link
            to="/all-visas"
            className="text-gray-600 hover:text-blue-500 transition duration-300 animate__animated animate__pulse"
          >
            All Visas
          </Link>
          {isLoggedIn && (
            <>
              <Link
                to="/add-visa"
                className="text-gray-600 hover:text-blue-500 transition duration-300 animate__animated animate__pulse"
              >
                Add Visa
              </Link>
              <Link
                to="/my-added-visas"
                className="text-gray-600 hover:text-blue-500 transition duration-300 animate__animated animate__pulse"
              >
                My Added Visas
              </Link>
              <Link
                to="/my-visa-applications"
                className="text-gray-600 hover:text-blue-500 transition duration-300 animate__animated animate__pulse"
              >
                My Visa Applications
              </Link>
            </>
          )}
        </div>

        {/* Conditional Rendering for Login/Register or User Profile */}
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 animate__animated animate__pulse animate__infinite"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 animate__animated animate__pulse animate__infinite"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer animate__animated animate__fadeInRight"
                />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user.displayName}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 animate__animated animate__pulse animate__infinite"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;