// dependencies
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// components
import Project from '../components/Project'

// data
import data from '../data/project.json'

const PortfolioDetail = () => {
    const [project, setProject] = useState([])

    useEffect(() => {
        // axios.get('https://randomuser.me/api/')
        //     .then(res => setProject(res.data.results))
        //     .catch(err => console.log(err))
        setProject(data)
    }, [])

    return (
        <div className="row">
            <div className="col s12">
                This is my project detail page
            </div>
        </div>
    )
}

export default PortfolioDetail
