// dependencies
import React from 'react'
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    // destructure project
    const {
        name,
        slug,
        description,
        screenshot,
        github,
        demo
    } = project

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" alt={name} src={screenshot} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{name}</span>
                </div>
                <div class="card-action">
                    {github ? <a href={github}>GitHub</a> : null}
                    {demo ? <a href={demo}>Demo</a> : null}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
