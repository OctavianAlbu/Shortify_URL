import React from "react";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import { Helmet } from "react-helmet";
import PagePresentation from "./Components/PagePresentation";
import BoostLink from "./Components/BoostLink";
import Statistics from "./Components/Statistics";
import LinkShortener from "./Utils/LinkShortener";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Landing Page</title>
      </Helmet>
      <Header />
      <PagePresentation />
      <div className="content-wrapper">
        <BoostLink />
        <Statistics />
        <LinkShortener />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
