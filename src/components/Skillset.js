import React from 'react'
import '../styles/Skillset.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Skillset = ({iconName, iconTitle, width}) => {
  return (
    <div className="skillset">
        <div className='skillset-box'>
            <div><FontAwesomeIcon icon={iconName} className='skillset-icon'/></div>
            <div className='progress'>
              <div>{iconTitle}</div>
              <div className='progress-bar'>
                <div className='progress-bar-inner' style={{'width': width}}></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skillset