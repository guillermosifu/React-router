
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Nosotros from '../pages/Nosotros'
import Servicios from '../pages/Servicios'
import Header from '../components/Header'

const Router = () => {
  return (
  
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='nosotros' element={<Nosotros/>}/>
     <Route path='servicios' element={<Servicios/>}/>
    </Routes>      
   
  )
}

export default Router
