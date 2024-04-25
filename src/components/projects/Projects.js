import React from 'react'
import Project from './Project'
import { ProjectInfo } from './ProjectInfo'
import './project.css'

const Projects = () => {
  return (
    <div className='projects_main' id="projects">
        <h1>My Projects</h1>
        <div className='projects_container' >
                {
                    ProjectInfo.map((project)=>(
                        <div key={project.title} >
                            <Project project={project} />
                        </div>
                    ))
                }
        </div>
    </div>
  )
}

export default Projects