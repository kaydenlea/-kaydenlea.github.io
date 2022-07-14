import React from 'react'
import './portfolio.css'
import IMG from '../../assets/coding.jpeg'
import IMG1 from '../../assets/twitter.jpg'
import IMG2 from '../../assets/airquality.jpg'
import IMG3 from '../../assets/numbers.jpg'
import IMG4 from '../../assets/website.jpg'
// const data =[
// const data =[
// const data =[
// const data =[
// const data =[
//   {
//     id: 1,
//     image:IMG,
//     title:'Title',
//     github:"https://github.com/kaydenlea/react-portfolio-website1",
//     demo:"https://github.com/kaydenlea/react-portfolio-website1"
//   },
//   {
//   id: 2,
//   image:IMG,
//   title:'Title',
//   github:"https://github.com/kaydenlea/react-portfolio-website1",
//   demo:"https://github.com/kaydenlea/react-portfolio-website1"
// },

// ]
const Portfolio = () => {
  return (
    <section id ='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>Air Quality Regression Model</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/kaydenlea/airquality" className='btn' target='_blank'>Github</a>
            {/* <a href="https://github.com/kaydenlea/react-portfolio-website1" className='btn btn-primary'>Live Demo</a> */}
            </div>
            
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>Johnny Depp/Amber Heard Sentiment Analysis</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/kaydenlea/johnnyamber" className='btn' target='_blank'>Github</a>
            {/* <a href="https://github.com/kaydenlea/react-portfolio-website1" className='btn btn-primary'>Live Demo</a> */}
            </div>
            
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>MNIST Number Recognition</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/kaydenlea/numberreader" className='btn' target='_blank'>Github</a>
            {/* <a href="https://github.com/kaydenlea/react-portfolio-website1" className='btn btn-primary'>Live Demo</a> */}
            </div>
            
        </article>



        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>Portfolio Website Code</h3>
            <div className='portfolio__item-cta'>
            <a href="https://github.com/kaydenlea/portfolio" className='btn' target='_blank'>Github</a>
            {/* <a href="https://github.com/kaydenlea/react-portfolio-website1" className='btn btn-primary'>Live Demo</a> */}
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Portfolio