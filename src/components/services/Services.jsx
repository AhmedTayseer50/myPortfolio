import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services' >
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service wow animate__bounceInDown" data-wow-duration="2s" data-wow-delay="0.1s">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Conducting research to understand user needs.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p> Structuring and organizing content in easy way.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Creating interactive prototypes of the design to test before development</p>
            </li>
            <li>
              <BsCheck className='service__list-icon last_one' />
              <p>Creating visual design to enhance the user interface.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon last_one' />
              <p>Conducting usability testing to evaluate the design .</p>
            </li>
            
          </ul>
        </article>
         {/* END OF UI/UX */}

         <article className="service wow animate__bounceIn" data-wow-duration="2s" data-wow-delay="0.1s" >
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Developing online stores for businesses.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p> Designing the visual aspects of a website.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Implementing the website design using front-end technologies..</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p> Developing complex web applications, such as social media platforms.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Providing ongoing maintenance and support for websites.</p>
            </li>
           
          </ul>
        </article>
         {/* END OF WEB DEVOLOPMENT */}

         <article className="service wow animate__bounceInUp" data-wow-duration="2s" data-wow-delay="0.1s">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Developing a content strategy to target audience</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p> Optimizing content for search engines.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Creating high-quality content that informative target audience.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Promoting content through various channels.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon ' />
              <p>Managing and updating content on the client's website.</p>
            </li>
          </ul>
        </article>
         {/* END OF CONTENT CREATION */}
         
      </div>
    </section>
  )
}

export default Services