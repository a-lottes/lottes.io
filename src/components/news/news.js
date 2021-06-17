import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GetNews } from "../../hooks/get-news"

import "./style.scss"

const { data } = GetNews();

class News extends React.Component {
  render() {
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
              >
                <header>
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.frontmatter.path}
                    >
                      {post.frontmatter.title}
                    </Link>
                  <span className="subtitle is-block post-date">
                    posted at {post.frontmatter.date}
                  </span>
                  </p>
                </header>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

News.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};
export default News