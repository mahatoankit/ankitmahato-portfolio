import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigating.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { GoProject } from "react-icons/go";
import { VscFeedback } from "react-icons/vsc";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";

const Navigating = (e) => {
  let [activeNav, setActiveNav] = useState("home");
  return (
    <nav>
      <Link
        to="/"
        onClick={(e) => {
          setActiveNav("home");
        }}
        className={activeNav === "home" ? "active" : ""}
      >
        <IoHomeOutline />
      </Link>

      <Link
        to="/skills"
        onClick={(e) => {
          setActiveNav("skills");
        }}
        className={activeNav === "skills" ? "active" : ""}
      >
        <FaCode />
      </Link>

      <Link
        to="/projects"
        onClick={(e) => {
          setActiveNav("projects");
        }}
        className={activeNav === "projects" ? "active" : ""}
      >
        <GoProject />
      </Link>

      <Link
        to="/testimonials"
        onClick={() => {
          setActiveNav("testimonials");
        }}
        className={activeNav === "testimonials" ? "active" : ""}
      >
        <VscFeedback />
      </Link>

      <Link
        to="/contact"
        onClick={() => {
          setActiveNav("contact");
        }}
        className={activeNav === "contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </Link>

      <Link
        to="/blogs"
        onClick={() => {
          setActiveNav("blogs");
        }}
        className={activeNav === "blogs" ? "active" : ""}
      >
        <CiGlobe />
      </Link>
    </nav>
  );
};

export default Navigating;
