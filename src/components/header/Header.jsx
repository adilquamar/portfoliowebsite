import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.avif'
import Socials from './Socials'

const Header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Adil Quamar</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={ME} alt="me"></img>
        </div>
      </div>
    </section>
  )
}

export default Header