import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'
import { TypeAnimation } from 'react-type-animation';
const Header = () => {
  return (  
    <header>
      <div className="container header__container">
        
        <h1 className='name'><TypeAnimation sequence ={['Caden Lee', 1000, 'Kaden Lee',1000, 'Kayden Lee', 2000, 'Kayden Lea']}></TypeAnimation></h1>
        <h5 className="text-light">
          Data Scientist
        </h5>
        <CTA/>
        <HeaderSocial/>

        {/* <div className='me'>
          <img src={ME} alt='me'/>
        </div> */}

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header