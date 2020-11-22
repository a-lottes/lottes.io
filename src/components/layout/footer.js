import React from "react";
import { Link } from "gatsby";

import "./footer.scss"

class Footer extends React.Component {

  render() {
    return (
      <footer className={'clearfix'}>
        <div className={'container'}>
          <div className={'footer-left copyright'}>
            © {new Date().getFullYear()}, Built with
          {` `}
           love and coffee by <a href="https://github.com/a-lottes/">a-lottes</a>
          </div>
          <div className={'footer-center'}>
            <span className={'footer-title'}>Informations</span>
            <nav>
              comming soon
            </nav>
          </div>
          <div className={'footer-right'}>
            <span className={'footer-title'}>Content</span>
            <nav>
              <Link to="/blog/" activeClassName={'active'}>Blog</Link>
                <Link to="/about/" activeClassName={'active'}>About</Link>
            </nav>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
