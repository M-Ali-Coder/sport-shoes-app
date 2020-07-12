import React from "react";
import posts from "../../data/BlogPageData";
import AppPageBanner from "../AppPageBanner";
import LatestBlogPost from "../LatestBlogPost";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts,
    };
  }

  componentDidMount() {
    document.title = "Ekommart | Blog  page";
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="blog-page-wrapper">
        <AppPageBanner title="Blog" />
        <div className="container">
          <div className="page-content-wrapper">
            <div className="our-blog-posts">
              {posts.map(({ id, ...otherProps }) => (
                <LatestBlogPost key={id} {...otherProps} />
              ))}
            </div>

            <div className="latest-blog-side">
              <div className="column">
                <h4>Latest Posts</h4>
                <div className="item">
                  <div className="blog-image">
                    <img src={posts[0].image} alt="blog-item" />
                  </div>
                  <div className="post-info">
                    <h6>{posts[0].title}</h6>
                    <p>{posts[0].postedAt}</p>
                  </div>
                </div>
                <div className="item">
                  <div className="blog-image">
                    <img src={posts[1].image} alt="blog-item" />
                  </div>
                  <div className="post-info">
                    <h6>{posts[1].title}</h6>
                    <p>{posts[1].postedAt}</p>
                  </div>
                </div>
                <div className="item">
                  <div className="blog-image">
                    <img src={posts[2].image} alt="blog-item" />
                  </div>
                  <div className="post-info">
                    <h6>{posts[2].title}</h6>
                    <p>{posts[2].postedAt}</p>
                  </div>
                </div>
              </div>

              <div className="column">
                <h4>Tags</h4>
                <div className="tags-items">
                  <span>blogs</span>
                  <span>busniss</span>
                  <span>news</span>
                  <span>posts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPage;
