// dependencies
import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><Link className="grey-text text-lighten-3" to="/">Home</Link></li>
                            <li><Link className="grey-text text-lighten-3" to="/blog">Blog</Link></li>
                            <li><Link className="grey-text text-lighten-3" to="/portfolio">Portfolio</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2020 Copyright Text
                </div>
            </div>
        </footer>
    )
}

export default Footer