import React from "react";
import { arrow } from '../assets/index'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="error-flex">
            <div className="error-flex-col">
                <p className="error-page-txt">404 error</p>
                <h3 className="error-header">We can’t find that page</h3>
                <p className="error-txt-1">Sorry, the page you are looking for doesn't exist.</p>
            </div>

            <div className="error-flex-row">
              <Link to="/contact"><button className="error-btn-flex">
                    <img src={arrow} alt="arrow" />
                    <p className="error-btn-txt">Go back</p>
                </button></Link>
                <div>
                   <Link to="/"><button className="error-btn-2">Take me home</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Error;