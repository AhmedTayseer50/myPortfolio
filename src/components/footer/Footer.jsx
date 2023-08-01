import React from 'react'
import './footer.css'
import {FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'




const Footer = () => {
  return (
    <footer>
        <a href="#" ><img  className='footer__logo' src="/images/logo2.png" alt="" /></a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Expeirience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
          <a href="https://www.facebook.com/profile.php?id=100002127164080" target='_blank'><FaFacebookF /></a>
          <a href="https://www.instagram.com/ahmedtayseer9625/" target='_blank'><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/ahmed-tayseer-44b2a2257/" target='_blank' ><FaLinkedin  /></a>
        </div>


        <div className="footer__copyright">
          <small>&copy; Ahmed TagEldwal. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer