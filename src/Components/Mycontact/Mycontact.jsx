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
  e.preventDefault()
  setDetailes({ name, email, msg })
  setName('')
  setEmail("")
  setMsg("")
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
          <input type="text" onChange={(e) => { setName(e.target.value) }} className="border rounded" />
          <label htmlFor="email">Email </label>
          <input type="text" onChange={(e) => { setEmail(e.target.value) }} className="border rounded" />
          <label htmlFor="message" >message </label>
          <input type="textarea" onChange={(e) => { setMsg(e.target.value) }} className="border rounded" />
          <button className='btn btn-primary'>Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Mycontact
