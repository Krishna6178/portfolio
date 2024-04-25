import React from 'react'
import './project.css'

const Project = ({project}) => {
  return (
    <div className='project_info_main'>
        <img src={project.imag} width="100%" height="100%"></img>
        <h1>{project.title}</h1>
        <h3>{project.type}</h3>
        <a href={project.code} target="_blank">View Code</a>
    </div>
  )
}

export default Project