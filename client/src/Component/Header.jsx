import React from 'react'
import Head from './Head'
import './Header.css'

const Header = () => {
  return (
    <div>
      <Head/>
      <header>
        <nav className='flexSB'> 
            <ul className='flexSB'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Journal</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
           <div className='start'>
            <div className="button"> STOCK Display</div>
           </div>
        </nav>
      </header>
    </div>
  )
}

export default Header

