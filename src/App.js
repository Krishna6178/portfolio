import React from 'react';
import './App.css'
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <>
        <Navbar />
        <Home id="home"/>
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
    </>
  )
}

export default App