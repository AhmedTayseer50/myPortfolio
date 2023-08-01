import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials wow animate__fadeInLeft ' data-wow-duration="2s" data-wow-delay="0.1s" >
        <a href="https://www.linkedin.com/in/ahmed-tayseer-44b2a2257/" target='_blank' ><BsLinkedin /></a>
        <a href="https://github.com/AhmedTayseer50" target='_blank'><FaGithub /></a>
        
    </div>
  )
}

export default HeaderSocials