import React from "react";
import Logo from "../../images/logo.svg";
import NavLinks from "./Components/NavLinks";
import LoginSystem from "./Components/LoginSystem";

const Header = () => {
  return (
    <React.Fragment>
      <img src={Logo} className="header-logo" />
      <NavLinks />
      <LoginSystem />
    </React.Fragment>
  );
};

export default Header;
