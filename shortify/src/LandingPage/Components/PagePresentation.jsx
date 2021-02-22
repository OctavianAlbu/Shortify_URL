import React from "react";
import DeskImage from "../../images/illustration-working.svg";

const PagePresentation = () => {
  return (
    <div className="page-presentation-container">
      <h1>More than just shorter links</h1>
      <p className="page-presentation-subtitle">
        Build youe brand's recognition and get detailed insigths on how your
        links are performing.
      </p>
      <p className="get-started-option">Get Started</p>
      <img src={DeskImage} className="desk-image" />
    </div>
  );
};

export default PagePresentation;
