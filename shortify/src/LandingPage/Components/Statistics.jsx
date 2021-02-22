import React from "react";
import BrandRecognitionIcon from "../../images/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../../images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../../images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className="statistics-wrapper">
      <h3>Advanced Statistics</h3>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div>
        <div className="brand-recognition-container">
          <img src={BrandRecognitionIcon} className="brand-recognition-icon" />
        </div>
        <div className="statistics-box box1">
          <p className="statistic-title">Brand Recognition</p>
          <p className="statistics-text">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <p className="connection-line1"></p>
        <div className="detailed-records-container">
          <img src={DetailedRecordsIcon} className="detailed-records-icon" />
        </div>
        <div className="statistics-box box2">
          <p className="statistic-title">Detailed Records</p>
          <p className="statistics-text">
            Get insights into who is clicking your links. Knowing when and where
            people engage with your content helps inform better decisions
          </p>
        </div>
        <p className="connection-line2"></p>
        <div className="fully-customizable-container">
          <img
            src={FullyCustomizableIcon}
            className="fully-customizable-icon"
          />
        </div>
        <div className="statistics-box box3">
          <p className="statistic-title">Fully Customizable</p>
          <p className="statistics-text">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
