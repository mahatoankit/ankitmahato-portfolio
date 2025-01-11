import "./portfolio.css";

import hospital from "../../assets/hospital.png";
import portfolio from "../../assets/anotherPortfolio.png";
import golfWeb from "../../assets/golfweb.png";
import IMG6 from "../../assets/Project4.jpg";
import hotel from "../../assets/hotel.png";
import newport from "../../assets/portfolioNew.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Hotel Website",
      img: hotel,
      description:
        "A comprehensive website dedicated to the franchise 'The Majestik Vogue', providing users with detailed information on all available services and pricing.",
      technologies: "HTML | CSS",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "My first portfolio",
      img: portfolio,
      description:
        "A personal website assembled for a lawyerI created my very first website using only HTML, CSS, and JavaScript. I followed a YouTube tutorial while I was learning.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://mahatoankit.github.io/My-Portfolio/",
      github: "https://github.com/mahatoankit/My-Portfolio",
    },
    {
      id: 3,
      title: "Hospital Management System",
      img: hospital,
      description:
        "A Hospital Management System (HMS) in Python automates hospital tasks like managing patients, appointments, and billing, improving efficiency.",
      technologies: "HTML | CSS | JavaScript",
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "My new portfolio",
      img: newport,
      description:
        "A personal portfolio website designed to highlight my frontend development abilities.",
      technologies: "HTML | CSS | JavaScript | React Js",
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "A clone website of sidgolf",
      img: golfWeb,
      description:
        "A clone website of Sidcup Golf, which improved my frontend skills during the development phase.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://mahatoankit.github.io/golfWeb/",
      github: "https://github.com/mahatoankit/golfWeb",
    },
    {
      id: 6,
      title: "Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "HTML | SCSS | JavaScript",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((item, i) => (
          <article className="portfolio__item" key={item.id}>
            <div className="portfolio__item-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={item.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={item.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
