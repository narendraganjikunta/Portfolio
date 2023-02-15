import React, { createContext, useContext, useEffect, useState } from 'react'
import { AppContext, Appcontext } from '../Context/Context'
import './Mycontact.css'
function Mycontact() {
  const [name, setName] = useState()
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [detailes, setDetailes] = useState('')
  const newname = useContext(AppContext)

 function onsubmit(e) {

  setDetailes({ name, email, msg })
  e.preventDefault()
  setName(' ')
  setEmail(" ")
  setMsg(" ")
}


  console.log(detailes)
  return (

    <div>
      <div className="container contact text-center mt-3">
        <h1>CONTACT.</h1>
        <h4>Lets have a chat</h4>
      </div>
      <form onSubmit={onsubmit}>
        <div className='container mycontact'>
          <label htmlFor="name">Your Name </label>
          <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="border rounded" placeholder='YOUR NAME' />
          <label htmlFor="email">Email </label>
          <input type="text"value={email} onChange={(e) => { setEmail(e.target.value) }} className="border rounded" placeholder='YOUR EMAIL' />
          <label htmlFor="message" >message </label>
          <input type="textarea" value={msg} onChange={(e) => { setMsg(e.target.value) }} className="border rounded" placeholder='ENTER YOUR MASSEGE'/>
          <button className='btn btn-primary'>Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Mycontact
