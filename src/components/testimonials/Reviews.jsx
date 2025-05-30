import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Reviews.css";

const Reviews = () => {
  const Reviews = [
    {
      id: 1,
      link: "#",
      name: "Osama Bin Laden",
      role: "Cyber Security Engineer . Improving open-source projects, one commit at a time.",
      test: "As a developer and a problem solver, I think Ankit is a great collaborative partner to have. I met Ankit in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.",
    },
    {
      id: 2,
      link: "#",
      name: "Bill Gates",
      role: "Full-stack developer | Technical Support Engineer at Microverse",
      test: "It was a pleasure collaborating with Ankit on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens his knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      link: "#",
      name: "Elon Musk",
      role: "Full Stack Developer| PostgreSQL | JavaScript | React | Redux | HTML & CSS | Python.",
      test: "I worked with Ankit in the same team and him communication skills are very strong. Him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he's a good team worker, but also because he has very good skills and I know he has much more potential to be shown.",
    },
    {
      id: 4,
      link: "#",
      name: "Mr. Mahato",
      role: "Full-Stack Web Developer. JavaScript | Rails | React | Redux.",
      test: "I mentored Ankit a few months back, and I can confidently say he is a great person to work with. He showed genuine interest in my teachings, listened carefully, and asked questions whenever he needed clarification. In terms of professional skills, he is dedicated to his work, consistently giving his best and exceeding the project's expectations.",
    },
    {
      id: 5,
      link: "#",
      name: "Sam Altman",
      role: "Software Developer",
      test: "Throughout all our collaborations, Ankit has always conducted himself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Reviews</h2>
      <Swiper
        className="container Reviews__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {Reviews.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className="client__name">{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
