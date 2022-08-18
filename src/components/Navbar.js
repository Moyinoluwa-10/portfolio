import React, { useState} from 'react'
import '../styles/Navbar.css'
import Navigation from './Navigation'
import Navigations from './Navigations'

const Navbar = () => {

  // const hamburger = document.querySelector('.hamburger');
  // const nav = document.querySelector('.nav');
    // hamburger.addEventListener("click", () => {
    //   hamburger.classList.toggle("active");
    //   nav.classList.toggle("active");
    // })

  // document.querySelectorAll("nav_list").forEach(n => n.addEventListener("click", () => {
  //   hamburger.classList.remove("active");
  //   nav.classList.remove("active");
  // }))

  const [open, setOpen] = useState(false)

  let menu;

  if (open) {
    menu = <Navigations />
  }

  return (
    <>
    
        <div className='navbar'>

            <div className='name-tag'><h1>Moyinoluwa Adelowo</h1></div>

            <Navigation />

            {menu}

            <div className="hamburger" onClick={() => {
              setOpen(!open);
              }}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        

        </div>
    
    </>
  )
}

export default Navbar