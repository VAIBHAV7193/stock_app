import React from 'react'
import {GrFacebook} from 'react-icons/gr'
import {BsInstagram,BsYoutube} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import './Head.css'

const Head = () => {
  return (
    
        <div>
      <section className='head'>
        <div className="container flexSB">
            <div className="logo">
                <h1>STOCK</h1>
                <span>ONLINE CHRATS & DISPLAY</span>
            </div>
            <div className="social">
               <GrFacebook className='icon'/>
               <BsInstagram className='icon'/>
               <FaTwitterSquare className='icon'/>
               <BsYoutube className='icon'/>
            </div>
        </div>
      </section>
    </div>
      
    
  )
}

export default Head
