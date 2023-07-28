import React, { useState } from 'react'
import './Home.css'
import Form from './Form'
import Data from './Data'
import { useAuth } from './Auth'

const Home = () => {

  const[auth,setAuth] = useAuth();


  
 
  return (
    <div className='home'>
        <Form />
        <Data/>
        </div>
  )
}

export default Home
