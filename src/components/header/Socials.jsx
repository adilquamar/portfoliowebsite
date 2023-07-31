import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/aquamar/' target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/adilquamar/' target='_blank' rel='noopener noreferrer'><FaGithub/></a>
    </div>
  )
}

export default Socials