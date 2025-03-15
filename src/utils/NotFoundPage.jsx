import React from "react";
import { Link } from "react-router-dom";
import "animate.css"; // Import Animate.css for animations

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Animated 404 Text */}
      <h1 className="text-9xl font-bold animate__animated animate__bounceIn">
        404
      </h1>

      {/* Page Not Found Message */}
      <p className="text-2xl mt-4 animate__animated animate__fadeInUp animate__delay-1s">
        Oops! Page Not Found
      </p>

      {/* Description */}
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 animate__animated animate__fadeInUp animate__delay-2s">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 animate__animated animate__fadeInUp animate__delay-3s"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;