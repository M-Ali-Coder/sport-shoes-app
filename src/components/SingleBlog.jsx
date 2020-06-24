import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = ({ blogImg, title, subTitle, postedAt, postedBy }) => {
  return (
    <div className="single-blog-el-wrapper">
      <div className="post-thumbnail">
        <Link to="#">
          <img src={blogImg} alt="blog-img" />
        </Link>
        <div className="post-header-content">
          <div className="categories-link">{subTitle}</div>
          <div className="blog-title">{title}</div>
        </div>
      </div>
      <div className="post-meta">
        <span>{postedAt} </span> - <span> By.{postedBy}</span>
      </div>
    </div>
  );
};

export default SingleBlog;
