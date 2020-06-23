import React from "react"

import Layout from "../components/layout/layout"
import Image from "../components/elements/image"
import SEO from "../components/elements/seo"
import Hero from "../components/elements/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <section className="fw-area">
      <div className="container">
        <main>
          <h2>Hi people</h2>
          <p>Welcome to my developer blog.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </main>
      </div>
    </section>
  </Layout>
)

export default IndexPage
