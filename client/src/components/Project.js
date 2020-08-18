// dependencies
import React from 'react'

const Project = ({ project }) => {
    return (
        <div className="col s6">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://via.placeholder.com/1500" />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{`${project.name.first} ${project.name.last}`}</span>
                    <p><a href="#">This is a link</a></p>
                </div>
            </div>
        </div>
    )
}

export default Project
