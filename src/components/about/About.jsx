import React from 'react'
import'./about.css'
import ME from '../../assets/about-me.jpg'
import {BsAward} from 'react-icons/bs'
import {BiBookOpen} from 'react-icons/bi'
const About = () => {
  return (
    <section id='about'>
      <h5></h5>
      <div className='aboutheader'>
      <h2>About Me</h2>
      </div>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About" />
          </div>
        </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <BsAward className='about__icon'/>
            <h5>Education</h5>
            <small>3rd Year USC Student</small>
          </article>

          

          <article className='about__card'>
          <BiBookOpen className = 'project__icon'/>
            <h5>Projects</h5>
            <small>Ranging from machine learning to web development</small>
          </article>
        </div>
        <article className='paragraph'>
        <p>
        Aspiring data scientist and environmental studies student specializing in machine learning 
        and sustainability. Seeking experience in data science and computer science in order to create
        a more advanced world.
      </p>
      </article>
      <a href='#contact' className='btn btn-primary'> Let's Talk</a>
      </div>
      </div>
      
    </section>


  )
}

export default About