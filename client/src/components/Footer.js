// dependencies
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// utilities
import { splitArray } from '../utilities'

const Footer = ({ profile }) => {
    // destructure profile
    const {
        fullName,
        headline,
        skills,
        github,
        linkedIn
    } = profile

    // state hooke variables
    const [skills2D, setSkills2D] = useState([[], []])

    // split skills array into halves
    useEffect(() => skills && setSkills2D(splitArray(skills)), [skills])

    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">{fullName}</h5>
                        <p className="grey-text text-lighten-4">{headline}</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <div className="col s12">
                            <h5 className="white-text">Skills</h5>
                        </div>
                        <div className="col l6 s12">
                            <ul>
                                {skills2D[0] && skills2D[0].map((skill, index) => <li key={index}>{skill}</li>)}
                            </ul>
                        </div>
                        <div className="col l6 s12">
                            <ul>
                                {skills2D[1] && skills2D[1].map((skill, index) => <li key={index}>{skill}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <span className="fuck">{`© ${new Date().getFullYear()} ${fullName}`}</span>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <a href={github} rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faGithubSquare} />
                            </a>
                            <a href={linkedIn} rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer