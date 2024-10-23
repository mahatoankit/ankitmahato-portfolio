import React from "react";
import Header from "../header/Header";
import Navigating from "../RouteNav/Navigating";
import Footer from "../footer/Footer";
import Reviews from "../testimonials/Reviews";

const Testimonials = () => {
  return (
    <>
      <Header />
      <Reviews />
      <Navigating />
      <Footer />
    </>
  );
};

export default Testimonials;
