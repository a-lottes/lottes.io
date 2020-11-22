import React from "react"
import { Link } from "@reach/router"

function Hero() {

  return (
    <section className="clearfix">
		<div className="container">
			<div className="section-left">
				<h1 className="section-title">I am developer and project manager</h1>
				<h5 className="section-tagline">This is my personal blog and portfolio website.</h5>
			</div>
			<div className="section-right">
			<Link to="/about/" className="learn-more">Learn more</Link>
			</div>
		</div>
	</section>
  )
}


export default Hero
