import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="header-links-container">
      <Link to="" className="header-links">
        Features
      </Link>
      <Link to="" className="header-links">
        Pricing
      </Link>
      <Link to="" className="header-links">
        Resources
      </Link>
    </nav>
  );
};

export default NavLinks;
