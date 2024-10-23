import React, { useEffect, useState } from "react";
import "../BlogPage/Blogs.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlogFrag = () => {
  // let param = useParams()
  let [blogData, setBlogData] = useState([]);
  let navigate = useNavigate();

  const getBlogDetails = async () => {
    try {
      const response = await axios({
        url: "https://67048b72ab8a8f8927341505.mockapi.io/message/blogPost",
        method: "GET",
      });
      console.log(response.data);
      setBlogData(response.data);
    } catch (error) {
      console.log("Error fetching the data:", error);
    }
  };

  useEffect(() => {
    getBlogDetails();
  }, []);

  return (
    <section>
      <h5>Explore my journey in the world of tech through</h5>
      <h2>Blogs</h2>
      <div className="wrapper">
        <div className="card">
          {blogData.map((item, index) => (
            <div className="blog_cards" key={item.id}>
              <h1>{item.blogTitle}</h1>
              <h4>{item.datePosted}</h4>
              <small
                style={{
                  display: "block",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.discription}
              </small>
              <button
                onClick={(e) => {
                  navigate(`/blogs/${item.id}`);
                }}
              >
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFrag;
