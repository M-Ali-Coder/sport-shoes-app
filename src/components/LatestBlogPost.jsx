import React from "react";
import { Link } from "react-router-dom";

const LatestBlogPost = ({ title, description, image, postedAt }) => {
  return (
    <div className="latest-blog-post-wrapper">
      <div className="blog-item">
        <div className="blog-image">
          <img src={image} alt="" />
        </div>
        <div className="posted-date">
          <p>{postedAt}</p>
        </div>
        <div className="post-title">
          <Link to="#">
            <h3>{title}</h3>
          </Link>
        </div>
        <div className="post-description">
          <p>{description}</p>
        </div>
        <div className="read-more">
          <Link to="#">read more</Link>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogPost;
