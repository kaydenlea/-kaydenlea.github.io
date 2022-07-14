import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './header.css'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/kayden-lea-a554471b9/" target = '_blank'  rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/kaydenlea" target = '_blank' rel="noreferrer"><BsGithub/></a>
        </div>
  )
}

export default HeaderSocials