import React from 'react'
import '../styles/About.css'
import MyPic from '../assets/images/bg.jpg'

const About = () => {
  return (
    <div className="about">
        
        <div className='about-title'>
          <p className='top'>HI THERE</p>
          <h2>I AM MOYINOLUWA ADELOWO</h2>
          <h1 className='top'>An Expert Web Developer</h1>
          <p className='bottom'>I am a passionate and goal driven Techpreneur whose interest is in using technology to build solutions to solve real world problems. I have had the luxury to work with great minds which has made me proactive and attentive to details</p>
        </div>
        
        <div><img src={MyPic} alt="Pictures" /></div>
   
   </div>
  )
}

export default About