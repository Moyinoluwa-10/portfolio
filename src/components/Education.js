import React from 'react'
import '../styles/Education.css'
import Edu from './Edu'

const Education = () => {
  return (
    <div className='education'>
        <Edu name={'University of Ibadan'} title={'Mechanical Engineering'} duration={'2021 - Present'}  />
        <Edu name={'Altschool Africa'} title={'Backend Engineering'} duration={'2021 - Present'}  />
    </div>
  )
}

export default Education