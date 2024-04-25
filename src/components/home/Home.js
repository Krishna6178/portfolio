import React from 'react';
import './home.css'
import Navbar from '../navbar/Navbar';
import {FcHome} from 'react-icons/fc'
import {FiMail} from 'react-icons/fi'
import {VscGithub} from 'react-icons/vsc'
import {BsLinkedin} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import imag from '../images/mypic.jpeg'
import stories from '../images/stories.png'


const Home = () => {
  return (
    <div className='main' id='home'>
        <div className='content'>
          <div className='image'>
              <img src={imag} width="90%" height="100%"></img>
          </div>
          <div className='main_content' >
           <h3>Hey, I'm</h3>
            <h1>Krishna Reddy Ganugapenta</h1>
            <h4>Full Stack React Developer</h4>
            <p className='p1'>I love to build web applications and like to develop colurful websites. Also, I like pushing myself and taking up new challenges.</p>
            <div className='content_home' >
              <a href='https://mail.google.com/mail/' target='_blank'><FiMail/><p>venkatk0615@gmail.com</p></a>
              <a href="https://www.google.com/maps/place/Alpharetta" target='_blank'><FcHome/><p>Alpharetta, Georgia, Unites States</p></a>
            </div>
            <div className='socialmedia'>
              <a href='https://www.linkedin.com/in/venkata-krishna-g-82946a189/' target="_blank"><BsLinkedin size="36" /></a>
              <a href='https://twitter.com/krishnareddy516' target="_blank"><FaTwitterSquare size="36" /></a>
              <a href='https://github.com/Reddy6178/' target="_blank"><VscGithub size="36" /></a>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Home