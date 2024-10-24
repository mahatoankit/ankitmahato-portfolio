import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Blogs.css";
import axios from "axios";

const DetailedBlogView = () => {
  let [blog, setBlog] = useState([]);
  let param = useParams();

  const getDetail = async () => {
    let response = await axios({
      url: `https://67048b72ab8a8f8927341505.mockapi.io/message/blogPost/${param.blogID}`,
      method: "GET",
    });
    setBlog(response.data);
    console.log(blog);
  };

  useEffect(() => {
    getDetail();
  });
  return (
    <div>
      <section>
        <h5>Posted on: {blog.datePosted}</h5>
        <h2>Blogs/{blog.blogTitle}</h2>
        <div className="wrapper">
          <div
            className="card"
            style={{ textAlign: "justify", height: "auto" }}
          >
            <div className="blog_cards" style={{ height: "auto" }}>
              <p>{blog.discription}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedBlogView;
