import React from 'react'
import './resume.css'

export default function Resume() {
  return (
    <>
     <section className="resume" id="resume">
      <h2>Resume</h2>
      <a href="/assets/resume.pdf" download className="download-button">
        Download Resume
      </a>
    </section>
    </>
  )
}
