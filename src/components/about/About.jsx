import React from 'react'
import'./about.css'
import ME from '../../assets/about-me.jpg'
import {BsAward} from 'react-icons/bs'
import {BiBookOpen} from 'react-icons/bi'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

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

        <p>
        Aspiring data scienctist and environmental studies undergraduate student specializing in machine learning and sustainability seeking to use technology to benefit our environment in order to create a better world for ourselves and the overall future of humanity. Seeking experience that can benefit me in developing my skills in either field of environmental studies or computer/data science.
      </p>
      <a href='#contact' className='btn btn-primary'> Let's Talk</a>
      </div>
      </div>
      
    </section>


  )
}

export default About