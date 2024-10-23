import React from "react";
import Intro from "../intro/Intro";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Navigating from "../RouteNav/Navigating";

const HomePage = () => {
  return (
    <>
      <Header />
      <Navigating></Navigating>
      <Intro />
      <Footer />
    </>
  );
};

export default HomePage;
