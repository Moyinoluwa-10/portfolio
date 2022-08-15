import React from 'react'
import Skillset from './Skillset'
import { faCss3, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons'


const Skills = () => {
  return (
    <div>
        <Skillset iconName={faHtml5}/>
        <Skillset iconName={faCss3}/>
        <Skillset iconName={faJs}/>

    </div>
  )
}

export default Skills