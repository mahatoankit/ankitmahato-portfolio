import "./contact.css";

import React, { useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import axios from "axios";

const Contact = (e) => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = {
      fullName: name,
      email: email,
      message: message,
    };

    try {
      let result = await axios({
        url: "https://67048b72ab8a8f8927341505.mockapi.io/message/portfolioForm",
        method: "post",
        data: formData,
      });

      console.log(result);
      setEmail("");
      setMessage("");
      setName("");
    } catch (error) {
      error.message();
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>chaudhryankit@gmail.com</h5>
            <a href="mailto:chaudhryankit848@gmail.com">Send a message</a>
          </article>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
