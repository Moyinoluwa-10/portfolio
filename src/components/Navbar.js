import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <>
    
        <div className='navbar'>

            <div className='name-tag'><h1>Moyinoluwa Adelowo</h1></div>

            <nav>
                <ul>
                    <li><a href='#home' className='nav-link active'>Home</a></li>
                    <li><a href='#about' className='nav-link'>About Me</a></li>
                    <li><a href='#contact' className='nav-link'>Contact</a></li>
                    <li><a href='#project' className='nav-link'>Projects</a></li>
                </ul>
            </nav> 
        
        </div>
    
    </>
  )
}

export default Navbar