// dependencies
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// components
import Project from '../components/Project'

const Portfolio = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
            .then(res => setProjects(res.data.results))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="row">
            <div className="col s12">
                {projects.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            project={project}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio
