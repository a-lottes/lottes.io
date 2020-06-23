import React from "react"
import { Link } from "@reach/router"

function Hero() {

  return (
    <section className="clearfix">
		<div className="container">
			<div className="section-left">
				<h1 className="section-title">Developer</h1>
				<h5 className="section-tagline">This is my personal Developer Blog and Portfolio</h5>
			</div>
			<div className="section-right">
			<Link to="/about/" className="learn-more">Learn more</Link>
			</div>
		</div>
	</section>
  )
}


export default Hero
