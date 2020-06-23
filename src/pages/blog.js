import React from 'react'
import Layout from "../components/layout/layout"
import SEO from "../components/elements/seo"
import Title from "../components/elements/title"
import Blogroll from '../components/blogroll/blogroll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Blog" />
        <Title title="Latesed Posts" />
        <section className="fw-area">
          <div className="container">
            <main>
              <h3>Developer Blog Posts by date</h3>
              <Blogroll />
            </main>
          </div>
        </section>
      </Layout>
    )
  }
}