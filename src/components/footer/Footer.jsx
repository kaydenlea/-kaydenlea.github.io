import React from 'react'
import "./footer.css"
import {AiOutlineFacebook} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Kayden Lea</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/kayden.lea.7" target='_blank'><AiOutlineFacebook/></a>
      </div>
      <div className="footer__">
        <small>&copy; Kayden Lea</small>
      </div>

    </footer>
  )
}

export default Footer