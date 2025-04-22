import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigating.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { GoProject } from "react-icons/go";
import { VscFeedback } from "react-icons/vsc";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";

const Navigating = () => {
  const [activeNav, setActiveNav] = useState("home");
  const location = useLocation();
  
  // Update active nav based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveNav("home");
    else if (path === "/skills") setActiveNav("skills");
    else if (path === "/projects") setActiveNav("projects");
    else if (path === "/testimonials") setActiveNav("testimonials");
    else if (path === "/contact") setActiveNav("contact");
    else if (path === "/blogs") setActiveNav("blogs");
  }, [location]);

  return (
    <nav>
      <Link
        to="/"
        onClick={() => setActiveNav("home")}
        className={activeNav === "home" ? "active" : ""}
      >
        <IoHomeOutline />
      </Link>

      <Link
        to="/skills"
        onClick={() => setActiveNav("skills")}
        className={activeNav === "skills" ? "active" : ""}
      >
        <FaCode />
      </Link>

      <Link
        to="/projects"
        onClick={() => setActiveNav("projects")}
        className={activeNav === "projects" ? "active" : ""}
      >
        <GoProject />
      </Link>

      <Link
        to="/testimonials"
        onClick={() => setActiveNav("testimonials")}
        className={activeNav === "testimonials" ? "active" : ""}
      >
        <VscFeedback />
      </Link>

      <Link
        to="/contact"
        onClick={() => setActiveNav("contact")}
        className={activeNav === "contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </Link>

      <Link
        to="/blogs"
        onClick={() => setActiveNav("blogs")}
        className={activeNav === "blogs" ? "active" : ""}
      >
        <CiGlobe />
      </Link>
    </nav>
  );
};

export default Navigating;
