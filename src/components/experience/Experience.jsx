import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skils</h2>
      <div className="container experience__container">
        <div className="experience__frontend wow animate__fadeInLeft" data-wow-duration="2s" data-wow-delay="0.1s" >
          <h3>Frontend Devolopment</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML5</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS3</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Sass</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Next.js</h4>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend wow animate__fadeInRight" data-wow-duration="2s" data-wow-delay="0.1s" >
          <h3>Backend Devolopment</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Nod JS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>RESTful API</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>JSON</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Git & GitHub</h4>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience