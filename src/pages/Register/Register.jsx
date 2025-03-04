import React, {  useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import { FcGoogle } from "react-icons/fc"; // Google icon
import "animate.css"; // For animations
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [passwordError, setPasswordError] = useState("");
  const {createUser} = useContext(AuthContext);

  const navigate = useNavigate();
  // Function to validate password (dummy implementation, you can replace it later)
  const validatePassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const minLength = 6;

    if (!uppercaseRegex.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!lowercaseRegex.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (password.length < minLength) {
      return "Password must be at least 6 characters long.";
    }
    return ""; 
  };

  const handleSignUp = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
    .then(res => {
      console.log("New user: ",res.user.email);
      toast.success(`User created successfully ${res?.user?.email}`)
      navigate ("/")
    })
    .catch(err=> {
      toast.error(err?.message)
    })
  }

  // Handle password change
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const error = validatePassword(password);
    setPasswordError(error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate__animated animate__fadeIn">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
        <form onSubmit={handleSignUp}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your photo URL"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              onChange={handlePasswordChange}
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1 animate__animated animate__shakeX">
                {passwordError}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline cursor-pointer">
              Login
            </Link>
          </p>
        </div>

        {/* Social Login Divider */}
        <div className="mt-6">
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-600">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Google Login Button */}
          <div className="mt-4">
            <button
              className="w-full flex items-center justify-center bg-white py-2 rounded-lg hover:bg-blue-600 border hover:text-white transition duration-200 cursor-pointer"
            >
              <FcGoogle className="text-3xl pr-1.5" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Register;