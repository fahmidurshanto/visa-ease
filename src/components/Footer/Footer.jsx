import React from "react";
import { Link } from "react-router-dom"; // Use Link for routing
import "animate.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 animate__animated animate__fadeInUp">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="animate__animated animate__fadeInLeft">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-500 transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500 transition duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: info@visaease.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Visa Street, Suite 456, Global City</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-200"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-200"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-200"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-200"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center animate__animated animate__fadeIn">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} VisaEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;