import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/elements/seo"
import Title from "../components/elements/title"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Title title={frontmatter.title} />
      <div className="container">
        <main>
        <article>
          <p
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Link className="btn-highlight" to="/blog/">
            Go back to posts
                  </Link>
          <span className="subtitle is-block post-date">
            posted at {frontmatter.date}
          </span>
        </article>
        </main>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`