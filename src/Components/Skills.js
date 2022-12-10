import React from 'react'
import '../styles/Skills.css'
import Skillset from './Skillset'
import { faCss3, faHtml5, faJs, faNodeJs, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons'


const Skills = () => {
  return (
    <div className="skills">

      <div className="skills-heading"> 
        <div><h1>My Skills</h1></div>
        <div><p>Here are a few skills I possess</p></div>
      </div>

      <div className='skills-set'>

          <Skillset iconName={faHtml5} iconTitle={'HTML'} width={'80%'}/>
          <Skillset iconName={faCss3} iconTitle={'CSS'} width={'60%'}/>
          <Skillset iconName={faJs} iconTitle={'Javascript'} width={'50%'}/>
          <Skillset iconName={faReact} iconTitle={'ReactJS'} width={'40%'}/>
          <Skillset iconName={faNodeJs} iconTitle={'NodeJs'} width={'20%'}/>
          <Skillset iconName={faWordpress} iconTitle={'Wordpress'} width={'20%'}/>

      </div>
    </div>
  )
}

export default Skills