import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ikku27u', 'template_1vajm8a', form.current, 'bv7AcyPvBmnjJWFie')
      .then((result) => {
          
          alert ("your Massage was sent successfully")
      }, (error) => {
          alert ("your Massage not send pleas try again later")
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ahmedtayseer417@gmail.com</h5>
            <a href=" mailto:ahmedtayseer417@gmail.com" target='_blank' >Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Ahmed Tayseer</h5>
            {/* her we will past our url for facebook page */}
            <a href="https://www.linkedin.com/in/ahmed-tayseer-44b2a2257/" target='_blank' >Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+ 01114719877 </h5>
            {/* her you will past your url for your whatsapp number */}
            <a href="https://wa.me/+2001114719877" target='_blank' >Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} >
          <input type=" text " name='name' placeholder='Your Full Name' required />
          <input type="email" name='email'  placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' required rows="7"></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact