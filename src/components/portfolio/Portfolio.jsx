import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import Resume from '../../assets/resume.pdf'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt='UAV Forge' />
          </div>
          <h3>Engineering Project UAV Forge: Computer Vision Team Lead and Member</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/uci-uav-forge/uavf_2023' className='btn'>Github</a>
            <a href='https://sites.uci.edu/uavforge/' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Learn More</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt='Amazon Internships' />
          </div>
          <h3>Amazon Software Development Internships: Summer '22 and '21</h3>
          <div className="portfolio__item-cta">
            <a href={Resume} download className='btn'>More Information in Resume</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt='HakcUCI2022 Hackathon' />
          </div>
          <h3>Waitless: HackUCI Best Social Good Hack & Best Product Pitch</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/limenilbuz/hackuci2022-waitless' className='btn'>Github</a>
            <a href='https://devpost.com/software/waitless-cy41hl' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Learn More</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio