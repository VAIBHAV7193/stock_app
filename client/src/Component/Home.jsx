import React, { useState } from 'react'
import './Home.css'
import Form from './Form'
import Data from './Data'

const Home = () => {
  const[state,setState] = useState(false);

  console.log(state)
  return (
    <div className='home'>
        <Form setState={setState}/>

        {
          state && <Data/>
        }
        
        </div>
  )
}

export default Home
