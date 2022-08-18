import React from 'react'
import '../styles/Navigation.css'

const Navigation = () => {
  return (
    <div className="navigation closed">
        <nav className='nav'>
                <ul className='nav-items'> 
                    <li className='nav-list'><a href='#home' className='nav-link active'>Home</a></li>
                    <li className='nav-list'><a href='#about' className='nav-link'>About Me</a></li>
                    <li className='nav-list'><a href='#contact' className='nav-link'>Contact</a></li>
                    <li className='nav-list'><a href='#project' className='nav-link'>Projects</a></li>
                </ul>
        </nav> 
    </div>
  )
}

export default Navigation