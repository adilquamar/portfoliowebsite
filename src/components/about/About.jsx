import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {IoSchoolSharp} from 'react-icons/io5'
import {AiFillFolderOpen} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="Adil"></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Months of Internship Exprience in Industry</small>
            </article>

            <article className='about__card'>
              <IoSchoolSharp className='about__icon'/>
              <h5>Education</h5>
              <small>UC Irvine - Computer Science & Engineering</small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>Hackathons, Drone Team, & Web Dev.</small>
            </article>
          </div>

          <p>
            Hi there! I graduated from 
            <b style={{color: "#4db5ff"}}> University of California, Irvine </b>
            in June of 2023 where I studied 
            <b style={{color: "#4db5ff"}}> Computer Science and Engineering</b>.
            Previously I was a Software Development Engineering Intern at 
            <b style={{color: "#4db5ff"}}> Amazon </b> 
            for the summer of '21 and '22. 
            I was also part of UCI's Engineering Project Team UAV Forge where I built and programmed 
            <b style={{color: "#4db5ff"}}> autonomous drones </b> as the 
            <b style={{color: "#4db5ff"}}> Computer Vision Team Lead </b>.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About