// dependencies
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// components
import Project from '../components/Project'

// data
import data from '../data/project.json'

const Portfolio = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        // axios.get('https://randomuser.me/api/')
        //     .then(res => setProjects(res.data.results))
        //     .catch(err => console.log(err))
        setProjects(data)
    }, [])

    return (
        <div className="row">
            {projects.map((project, index) => {
                return (
                    <Project
                        key={index}
                        project={project}
                    />
                )
            })}
        </div>
    )
}

export default Portfolio
