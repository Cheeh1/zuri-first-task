import React from 'react'
import { zuri, logo } from '../assets'

function Footer() {
    return (
        <footer>
          <hr />
          <div className="footer-items">
            <img className="footer-img" src={zuri} alt="zuri-logo" />
            <p className="footer-items-txt">HNG Internship 9 Frontend Task</p>
            <img className="footer-img" src={logo} alt="IaG-logo" />
          </div>
        </footer>
    )
}
export default Footer;