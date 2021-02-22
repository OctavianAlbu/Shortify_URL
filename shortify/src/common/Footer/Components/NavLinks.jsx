import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const links = [
    {
      title: "Features",
      links: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      title: "Resources",
      links: ["Blog", "Developers", "Support"],
    },
    {
      title: "Company",
      links: ["About", "Our Team", "Careers", "Contact"],
    },
  ];

  return (
    <nav className="footer-links-container">
      {links.map((el) => {
        return (
          <div className="footer-links-columns">
            <p className="footer-links-titles">{el.title}</p>
            {el.links.map((link) => {
              return <Link className="footer-links">{link}</Link>;
            })}
          </div>
        );
      })}
    </nav>
  );
};

export default NavLinks;
