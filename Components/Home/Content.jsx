import React from 'react'
import { Link } from 'react-router-dom'
import narendra from '../Assets/narendra.jpeg'
import './Content.css'
function Content() {
    return (

        <>
            <section className='mainhead container mt-1'>
                <div className="row text-center align-items-center">
                    <div className="detalies col-5 fs-3 text-white col-xs-12">
                        <h2 className='text-black ' >HELLOW I'M <span className='text-danger'>NARENDRA</span></h2>
                        <p className='text-black developer'>REACT DEVELOPER</p>
                        <div className=" btns mt-2 fs-5 mb-3">
                            <a className=' btn1 border-1 rounded-2 border-success ' ><Link to="./CONTACT" >PROJECT</Link></a>
                             <a className='btn2 border-2 rounded-3 border-danger mx-3'><Link to="./Mycontact">CONTACT</Link></a>
                        </div>
                    </div>
                    <div className="imag col-6 col-xs-12">
                        <img src={narendra} alt="" className='w-75 myimage'/>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Content
