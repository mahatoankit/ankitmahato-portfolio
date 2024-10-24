import React from 'react'
import Header from '../header/Header'
import Navigating from '../RouteNav/Navigating'
import Footer from '../footer/Footer'
import DetailedBlogView from '../BlogPage/detailedView/DetailedBlogView'

const BlogDetail = () => {
  return (
    <div>
      <Header />
      <DetailedBlogView/>
      <Navigating />
      <Footer />
    </div>
  )
}

export default BlogDetail
