import React from "react"

import Layout from "../components/layout/layout"
import Image from "../components/elements/image"
import SEO from "../components/elements/seo"
import Hero from "../components/elements/hero"
import News from "../components/news/news"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <section className="fw-area">
      <div className="container">
        <main>
          <h2>Hi people</h2>
          <p>Welcome to my developer blog. On this page i will write about the development of my open source project as well as share my portfolio.</p>
          <hr/>

          <h4>Find here my latesed Blog-post:</h4>
          <News />
          <hr/>
          
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </main>
      </div>
    </section>
  </Layout>
)

export default IndexPage
