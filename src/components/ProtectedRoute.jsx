
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const ProtectedRoute = ({ children, requiredRole }) => {
  const location = useLocation();
  
  // Get user from localStorage and parse safely
  let user = null;
  try {
    const userString = localStorage.getItem("user");
    if (userString) {
      user = JSON.parse(userString);
    }
  } catch (error) {
    console.error("Error parsing user data:", error);
    // Clear corrupted data
    localStorage.removeItem("user");
  }

  // If no user is logged in
  if (!user) {
    // Show alert before redirecting
    Swal.fire({
      title: "Authentication Required",
      text: "Please log in to access this page",
      icon: "warning",
      confirmButtonColor: "#667eea",
      heightAuto: false,
    });
    
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If a specific role is required and user doesn't have it
  if (requiredRole && user.role !== requiredRole) {
    Swal.fire({
      title: "Access Denied",
      text: "You don't have permission to access this page",
      icon: "error",
      confirmButtonColor: "#667eea",
      heightAuto: false,
    });
    
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
