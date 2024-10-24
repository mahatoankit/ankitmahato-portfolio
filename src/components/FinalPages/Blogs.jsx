import React from 'react'
import BlogFrag from '../BlogPage/BlogFrag'
import Header from '../header/Header'
import Navigating from '../RouteNav/Navigating'
import Footer from '../footer/Footer'


const Blogs = () => {
  return (
    <>
      <Header />
      <BlogFrag/>
      <Navigating />
      <Footer />
    </>
  )
}

export default Blogs
