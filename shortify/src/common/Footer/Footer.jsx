import React from "react";
import Logo from "../../images/logo.svg";
import NavLinks from "./Components/NavLinks";
import SocialIcons from "./Components/SocialIcons";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={Logo} className="footer-logo" />
      <NavLinks />
      <SocialIcons />
    </div>
  );
};

export default Footer;
