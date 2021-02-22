import React, { useState, useEffect } from "react";
import LinkComponent from "./LinkComponent";

const LinkShortener = () => {
  const [links, modifyLinks] = useState([]);

  const [currentLink, setLink] = useState("");

  const [validLink, setValidity] = useState(true);

  useEffect(() => {
    const linksToSet = JSON.parse(localStorage.getItem("links"));
    console.log(linksToSet);

    if (linksToSet) {
      modifyLinks(linksToSet);
    }
  }, []);

  const addShortLink = () => {
    const TinyURL = require("tinyurl");

    let valid = /^(ftp|http|https):\/\/[^ "]+$/.test(currentLink);

    if (valid) {
      TinyURL.shorten(currentLink, function (res, err) {
        if (err) console.log(err);

        const newLinks = [
          ...links,
          { fullLink: currentLink, shortLink: res, isCopied: false },
        ];

        modifyLinks(newLinks);

        localStorage.setItem("links", JSON.stringify(newLinks));
      });
    } else {
      setValidity(false);
    }
  };

  const setCopyState = (index) => {
    console.log(index);
    const newLinks = [...links];
    newLinks.map((link, newIndex) => {
      if (newIndex === index) {
        link.isCopied = true;
      } else {
        link.isCopied = false;
      }
    });

    modifyLinks(newLinks);
  };

  return (
    <div className="shorten-link-container">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="link-shortener"
        value={currentLink}
        onChange={(el) => {
          setLink(el.target.value);
          setValidity(true);
        }}
      />
      <p className="shorten-it-button" onClick={addShortLink}>
        Shorten it !
      </p>
      <p className="validity-error">
        {!validLink ? "Inputted URL not valid." : ""}
      </p>
      {links
        ? links.map((link, index) => {
            return (
              <LinkComponent
                key={index}
                index={index}
                link={link}
                setCopy={setCopyState}
              />
            );
          })
        : ""}
    </div>
  );
};

export default LinkShortener;
