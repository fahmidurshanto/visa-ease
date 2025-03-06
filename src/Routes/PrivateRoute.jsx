import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  const redirectPath = location.state?.from?.pathname || "/";
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ScaleLoader
          color="#2563eb"
          height={40}
          width={8}
          radius={4}
          margin={4}
        />
      </div>
    );
  }

  if (user) {
    // After successful login:
    navigate(redirectPath, { replace: true });
    return children;
  } else {
    // After unsuccessful login:
    // navigate("/login", { replace: true });
    return <Navigate to="/login"></Navigate>
  }
};

export default PrivateRoute;
