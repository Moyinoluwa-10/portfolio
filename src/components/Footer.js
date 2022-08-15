import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>

      <div className='top-container'>
        <div className='empty-container'></div>
        <div><h2>Moyinoluwa Adelowo</h2></div>
        <div className='empty-container'></div>

      </div>

      <div className='middle-container'>
        <div><a href='https://www.linkedin.com/in/moyinoluwa-adelowo-675565239/' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className='icons'/></a></div>
        <div><a href='https://twitter.com/AdelowoMoyin' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className='icons'/></a></div>
        <div><a href='https://github.com/Moyinoluwa-10' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='icons'/></a></div>
        <div></div>
        <div></div>
      </div>

      <div className="bottom-container"><p>Copyright &copy; 2022 | All rights reserved</p></div>
    
    </div>
  )
}

export default Footer