import React, { useState } from 'react'
import { Link } from 'react-scroll';
import './navbar.css'

const Navbar = () => {
  const [navbar,setNavbar] = useState(false);
  const scrollevent = ()=>{
    if (window.scrollY>=70){
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll',scrollevent);
  return (
    <div className={navbar? 'navbar bg' : 'navbar'}>
        <h1>Krishna Reddy Ganugapenta</h1>
        <div className='menu'>
            <p><Link to='home'>Home</Link></p>
            <p><Link to='skills'>Skills</Link></p>
            <p><Link to='projects'>Projects</Link></p>
            <p><Link to='contact'>Contact</Link></p>
        </div>
        <div className='home_mb'>
          <span ><Link to='home'>Home</Link></span>
        </div>
        
    </div>
  )
}

export default Navbar