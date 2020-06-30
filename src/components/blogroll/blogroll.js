import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

import "./blogroll.scss"

class Blogroll extends React.Component {
  render() {
    const { data } = this.props;
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
                  </p>
                </header>
                <p className="post-preview">
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="btn-highlight" to={post.frontmatter.path}>
                    Keep Reading
                  </Link>
                  <span className="subtitle is-block post-date">
                    posted at {post.frontmatter.date}
                  </span>
                </p>
              </article>
          <hr/>
            </div>
          ))}
      </div>
    )
  }
}

Blogroll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 350)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Blogroll data={data} count={count} />}
  />
)