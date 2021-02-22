import React from "react";
import { Link } from "react-router-dom";

const LoginSystem = () => {
  return (
    <nav className="login-system-container">
      <Link className="login-links" to="">
        Login
      </Link>
      <Link className="login-links" to="">
        Sign Up
      </Link>
    </nav>
  );
};

export default LoginSystem;
