import React from 'react'
import '../Content.css'

function Contact() {
  return (
    <div>
     <div className="container mt-1 computer">
       <div className='text-white top-50  text-center '>
      <h1 className='fw-5'>PROJECTS</h1>
         <p>Some Of My Most Recent Works</p></div>
         <div className="projects d-flex text-white fs-4 justify-content-center mt-5 align-items-center pt-5">
           <p className='mx-2  food'>FOOD DESIGN</p>
           <p className='mx-2 portfolio'>PORTFOLIO</p>
           <p className='mx-2 ecommers'>ECOMMERS</p>
         </div>
     </div>
   <div className="container mt-3">
    <div className="row proj justify-content-center">
      <div className='col-md-3 col-sm-5 proj1 p-1 mx-3 mt-3'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzu35JAnM_Cy_Assc_hcFrwnGI2XWPOVivw&usqp=CAU" className='image1' alt="" />
      <div className="fdetailes ">
        <h3 className="fname ">
          Food design
        </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Eos laudantium hic illum veniam vitae ut pariatur. Nulla laborum, aspernatur enim tempora earum dicta.</p>
      </div>
     <button className='border-success rounded '> <a href="www" >Source</a></button>
      </div>
      <div className='col-md-3 col-sm-5 proj1 p-1 mx-3 mt-3'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfFdSIa7MOcUWEY4ZmvtZVTrsajvC4r0SmA&usqp=CAU" className='image2' alt="" />
      <div className="fdetailes">
        <h3 className="fname">
       Portfolio
        </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Eos laudantium hic illum veniam vitae ut pariatur. Nulla laborum, aspernatur enim tempora earum dicta.</p>
      </div>
     <button className='border-warning rounded '> <a href="www" >Source</a></button>
      </div>
      <div className='col-md-3 proj1 p-1 mx-3 mt-3'>
        <img src="data:image/png;base64,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" className='image3' alt="" />
      <div className="fdetailes">
        <h3 className="fname">
        Ecommers
        </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Eos laudantium hic illum veniam vitae ut pariatur. Nulla laborum, aspernatur enim tempora earum dicta.</p>
      </div>
     <button className='border-dark rounded '> <a href="www" >Source</a></button>
      </div>
    </div>
   </div>
    </div>
  )
}

export default Contact
