import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import "./App.css";
<link rel="shortcut icon" href="favicon.gif"></link>;

const App = () => {
  return (
    <Router>
      <LandingPage />
    </Router>
  );
};

export default App;
