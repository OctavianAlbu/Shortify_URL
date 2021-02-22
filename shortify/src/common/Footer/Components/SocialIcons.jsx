import React from "react";
import Facebook from "../../../images/icon-facebook.svg";
import Twitter from "../../../images/icon-twitter.svg";
import Pinterest from "../../../images/icon-pinterest.svg";
import Instagram from "../../../images/icon-instagram.svg";

const SocialIcons = () => {
  return (
    <div className="social-icons-container">
      <img
        className="social-icon"
        title="Check Facebook our page"
        src={Facebook}
        alt="Facebook icon"
      />
      <img
        className="social-icon"
        title="Check Twitter our page"
        src={Twitter}
        alt="Twitter icon"
      />
      <img
        className="social-icon"
        title="Check Pinterest our page"
        src={Pinterest}
        alt="Pinterest icon"
      />
      <img
        className="social-icon"
        title="Check Instagram our page"
        src={Instagram}
        alt="Instagram icon"
      />
    </div>
  );
};

export default SocialIcons;
