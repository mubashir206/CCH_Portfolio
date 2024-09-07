import React from 'react'
import './skill.css'

export default function Skill() {
  const skills = [
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript',
    'jquery',
    'React.js',
    'Node.js',
    'Git & GitHub',
    'Ajax',
    'PHP',
    'Laravel',
  ];
  return (
    <>
     <section className="skills" id="skills">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
    </>
  )
}
