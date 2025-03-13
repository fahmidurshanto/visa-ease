import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import "animate.css";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const { login, googleLogin, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        // Display success toast
        toast.success(`${res.user.email} Login successful! Redirecting...`);
        navigate("/");

      })
      .catch((err) => {
        // Display error toast
        toast.error(err.message || "Login failed. Please try again.", {
          className: "animate__animated animate__fadeInRight",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate__animated animate__fadeIn">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        {loading ? (
          <div className="flex justify-center items-center">
            <ClipLoader color="#4A90E2" size={50} />
          </div>
        ) : (
          <form onSubmit={handleLogin}>
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
                disabled={loading}
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
                disabled={loading}
              />
            </div>
            <div className="mb-4 text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline cursor-pointer"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer"
              disabled={loading}
            >
              Login
            </button>
          </form>
        )}
        {!loading && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        )}
        {!loading && (
          <div className="mt-6">
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-600">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="mt-4">
              <button
                onClick={() =>
                  googleLogin()
                    .then((res) => {
                      const loggedInUser = res.user;
                      toast.success(`${loggedInUser.displayName}, Welcome to Visa Ease`);
                      navigate("/");
                    })
                    .catch((err) => {
                      toast.error(err.message);
                    })
                }
                className="w-full flex items-center justify-center bg-white py-2 rounded-lg hover:bg-blue-600 border hover:text-white transition duration-200 cursor-pointer"
                disabled={loading}
              >
                <FcGoogle className="text-3xl pr-1.5" />
                Continue with Google
              </button>
            </div>
          </div>
        )}
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

export default Login;