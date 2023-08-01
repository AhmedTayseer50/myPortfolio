import React from 'react'
import CV from '../../assets/Ahmed Tayseer CV.pdf'
import 'animate.css';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn animate__animated animate__fadeInUp animate__delay-3s animate__slow' >Download CV</a>
        <a href="#contact" className='btn btn-primary animate__animated animate__fadeInUp animate__delay-3s animate__slow'>Let's Talk</a>
    </div>
  )
}

export default CTA