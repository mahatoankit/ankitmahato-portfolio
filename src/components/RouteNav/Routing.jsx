import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../FinalPages/HomePage';
import Skills from '../FinalPages/Skills';
import Projects from '../FinalPages/Projects';
import Testimonials from '../FinalPages/Testimonials';
import ContactForm from '../FinalPages/ContactForm';
import Blogs from '../FinalPages/Blogs';
import BlogDetail from '../FinalPages/BlogDetail';


const Routing = () => {
  return (
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/testimonials" element={<Testimonials/>} />
      <Route path="/contact" element={<ContactForm/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/blogs/:blogID" element={<BlogDetail />} />
    </Routes>
  );
}

export default Routing;
