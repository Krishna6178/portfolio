import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact_main' id='contact'>
        <p>Follow Me</p>
        <div className='socialmedia'>
              <a href='https://www.linkedin.com/in/venkata-krishna-g-82946a189/' target="_blank"><BsLinkedin size="36" /></a>
              <a href='https://twitter.com/krishnareddy516' target="_blank"><FaTwitterSquare size="36" /></a>
              <a href='https://github.com/Reddy6178/' target="_blank"><VscGithub size="36" /></a>
            </div>
        <div className='details'>
            <p>+1 4044366626</p>
            <a href='https://mail.google.com/mail/' target='_blank'><p>venkatk0615@gmail.com</p></a>
        </div>
    </div>
  )
}

export default Contact