import React from 'react'
import './App.css'
import Header from './Component/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import Form from './Component/Form'


const App = () => {
  return (
    <div>
      
      <Header/>
      <Routes>
       <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
