import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './portfolio.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';



const Portfolio = () => {
  const [projects, setProject] = useState([]);


  useEffect(() => {
    loadProject();
  }, []);

  const loadProject = async () => {
    const result = await axios.get("http://portfolio202.42web.io/projects.php");
    setProject(result.data.reverse());
    // console.log(result.data)
  };




  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

      </div>

      <div>
        <Slider {...settings}>
        {projects.map((project) => (
          <article key={project.id} className='portfolio__item1'>
            <div className="portfolio__item-image">
              <img src={'http://portfolio202.42web.io/photos/' + project.photo} alt="" />
            </div>
            <h3 className='title_main'>{project.title}</h3>
            <p>{project.description}</p>
            <div className="portfolio__item-cta">
              {/* your project url for Github */}
              <a href={project.link_github} className='btn' target='_blank'>Github</a>
              {/* your url for vercel */}
              <a href={project.link_demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
        ))}
        </Slider>
      </div>


          <NavLink to="/Projects" className='btn btn-primary centter' > See more</NavLink>
          
    </section>
  )
}

export default Portfolio

