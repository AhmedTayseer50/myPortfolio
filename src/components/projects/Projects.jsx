
import React, { useState, useEffect } from 'react'
import './projects.css'
import '../../App.css'
import axios from "axios";


const Projects = () => {
    const [projects, setProject] = useState([]);
    useEffect(() => {
        loadProject();
    }, []);

    const loadProject = async () => {
        const result = await axios.get("http://portfolio202.42web.io/projects.php");
        setProject(result.data.reverse());
        // console.log(result.data)
    };

    return (

        <div>
            <h2 className='main_head'>All Projects</h2>
            <section className='portfolio__container'>


                {projects.map((project) => (
                    <article key={project.id} className='portfolio__item'>
                        <div className="portfolio__item-image">
                            <img src={'http://portfolio202.42web.io/photos/' + project.photo} alt="" />
                        </div>
                        <h3>{project.title}</h3>
                        <p style={{ textAlign: 'center' }}>{project.description}</p>
                        <div className="portfolio__item-cta">
                            {/* your project url for Github */}
                            <a href={project.link_github} className='btn' target='_blank'>Github</a>
                            {/* your url for vercel */}
                            <a href={project.link_demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default Projects