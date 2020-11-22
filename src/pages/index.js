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
          <h2>Hi visitor</h2>
          <p>Welcome to my developer blog. On this page i will write about the development of my open source project as well as share my portfolio.</p>
          
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          
          <hr/>

          <h4>Find here my latesed Blog-post:</h4>
          <News />
        </main>
      </div>
    </section>
  </Layout>
)

export default IndexPage
