import React from 'react'
import { Link } from 'react-router-dom'

import './About.css'
function About() {
  return (
    <section className='container'>
      <div className='flash'>h</div>
      <h1>ABOUT.</h1>
      <h5>Iam a friendly Front-End Developer</h5>
      <div className='information'>
      <h2>Who Am i?</h2>
      <p>Im a react font-end developer.i create responsive secure websites formy clints</p>
      <button><Link to="/contact">Contact</Link></button>
      </div>
     
    </section>
  )
}

export default About
