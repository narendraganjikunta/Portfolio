import React from 'react'
import { Link } from 'react-router-dom'

import './About.css'
function About() {
  return (
   <>
    <section className='container about text-white d-flex justify-content-center mt-2 rounded mt-3'>
     <div className="role">
          <h2>ABOUT</h2>
     </div>
     <p>Iam a Friendly Front-End Developer </p>
    </section>
    <section className="container about1 bg-dark opacity-75 rounded-2  mt-2">
   <div className="row adetailes d-flex justify-content-center align-items-center">
   <div className="  col-md-6 text-white text-center  mt-3">
        <h1>Who Am I?</h1>
        <p className=' text-center mb-3 '>Iam a React Front-end Developer.
          I create responsive secure website for my clints
        </p>
        <button className='bg-warning border rounded-3 mb-3'>CONTACT</button>
      </div>
      <div className="img col-md-6">
        <img className='w-100 mt-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-cO-YO271ViRxHQsMZeCMQzzOabd5zG5Dg&usqp=CAU" alt="" />
      </div>
   </div>
    </section>
   </>
  )
}

export default About
