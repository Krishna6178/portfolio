import React from 'react';
import './skill.css';
import {FaAws, FaCss3Alt, FaHtml5, FaNode, FaPython, FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'

const Skills = () => {
  return (
    <div className='skill_main' id="skills">
        <p>My Skills</p>
        <div className='skill_icon'>
            <FaHtml5 size="36px" />
            <FaCss3Alt size="36" />
            <IoLogoJavascript size="36px" />
            <FaReact size="36px" />
            <FaNode size="36px" />
            <FaPython size="36px" />
            <FaAws size="36px" />
        </div>
    </div>
  )
}

export default Skills