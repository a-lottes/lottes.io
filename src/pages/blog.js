import React from 'react'
import Layout from "../components/layout/layout"
import SEO from "../components/elements/seo"
import Title from "../components/elements/title"
import BlogRoll from '../components/blogroll/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Blog" />
        <Title title="Latesed Posts" />
        <section className="fw-area">
          <div className="container">
            <main>
              <BlogRoll />
            </main>
          </div>
        </section>
      </Layout>
    )
  }
}