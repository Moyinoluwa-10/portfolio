import React from 'react'
import '../styles/Edu.css'

const Edu = ({name, title, duration}) => {
  return (
    <div className='edu'>
        <span class="top">Institution</span><br />
        <span class="bottom">{name}</span><br />
        <span class="top">Course</span><br />
        <span class="bottom">{title}</span><br />
        <span class="top">Duration</span><br />
        <span class="bottom">{duration}</span>
    </div>
  )
}

export default Edu