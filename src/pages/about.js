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
        <h2>Profile</h2>
        <p>
        Disciplined and enthusiastic IT and solution manager, conversant with agil kanban and scrum methology. 
Previous sales experience includes a degree as merchant for office communication. Commended on multiple occasions for superb customer service and communication skills.
As leading UI/UX developer in many projcets a high quality design and user experience was the requirement of myself.
        </p>
        <Link to="/">Go back to the homepage</Link>
      </main>
    </div>
  </Layout>
)

export default About
