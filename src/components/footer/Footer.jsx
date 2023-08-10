import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ADIL QUAMAR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/aquamar/' target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Adil Quamar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer