import React from "react";
import LATEST_BLOG from "../data/latestBlog";
import SingleBlog from "./SingleBlog";

class LatestNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: LATEST_BLOG,
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <section className="latest-news-wrapper">
        <div className="section-title">
          <h2>latest news</h2>
          <p>Read our blog</p>
        </div>
        <div className="meet-our-latest-blog-news">
          {posts.map(({ id, ...otherProps }) => (
            <SingleBlog key={id} {...otherProps} />
          ))}
        </div>
      </section>
    );
  }
}

export default LatestNews;
