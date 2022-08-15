import React from 'react'
import '../styles/Skillset.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Skillset = ({iconName}) => {
  return (
    <div className="skillset">
        <div>
            <div><FontAwesomeIcon icon={iconName}/></div>
            <div></div>
        </div>
    </div>
  )
}

export default Skillset