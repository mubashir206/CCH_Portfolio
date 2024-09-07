import React from 'react'
import './project.css'
export default function Project() {
  const projectData = [
    {
      title: 'College management system',
      description: "It's my final year project in core php. But it's not live still and google drive link given below: ", 
      // link: 'https://drive.google.com/file/d/1jNcY5DPOdLoGjWY5E8-rqQo1hZVZkPxp/view?usp=drive_link',
      link:'#',
    },
    {
      title: 'MZK',
      description: "It is the property related project that i done in my last company",
      link: 'https://cats.technifibiz.com/',
    },
  ];
  return (
    <>
     <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
