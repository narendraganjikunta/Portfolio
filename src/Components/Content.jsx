import React from 'react'
import "../Components/Content.css"
import Detailes from '../Detailes.json'
function Content() {
  return (
    <section className='card-container'>
     {
       Detailes.map((x)=>{
         return <div className='card'>
         <h3>{x.name}</h3>
         <span>{x.percent}</span>
         </div>
        
       })
     }
     
    </section>
  )
}

export default Content
