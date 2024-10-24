import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./footer.css";
import { useParams } from "react-router-dom";

const Footer = () => {
  let param = useParams();

  return (
    <footer>
      <a href="#Home" className="footer__logo">
        Ankit Mahato
      </a>
      <ul className="permalinks">

        <li>
          <a
            href="/"
            onClick={(e) => {
              console.log(param);
            }}
          >
            Home
          </a>
        </li>

        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/testimonials">Testimonials</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/mahatoankit/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/mahatoankit"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; AnkitMahato 2024. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
