import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id = 'experience'>
      <h5>Skills</h5>
      <h2>Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
            <h3>Coding Languages</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Advanced</small>
                </div>
              
              </article>
              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>R</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>

        </div>

        <div className="experience__backend">
          <h3>Data Science Tools</h3>
        <div className='experience__content'>
              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>TensorFlow</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>NoSQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>Tableau</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>Scikit-learn</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <AiOutlineCheckCircle className='experience__details-icon'/>
                <div>
                  <h4>Pandas</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Experience