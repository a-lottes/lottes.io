import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/elements/seo"
import Title from "../components/elements/title"

const About = () => (
  <Layout>
    <SEO title="About Andreas Lottes" />
    <Title title="about me" />
    <div className="container">
      <main>
        <h2>Find out more about me</h2>
        <p>
          Welcome to page!<br/>
          My Name is Andreas Lottes, i am a working as project manager and front end developer. 

        </p>
        <Link to="/">Go back to the homepage</Link>
      </main>
    </div>
  </Layout>
)

export default About
