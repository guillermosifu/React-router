
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Nosotros from '../pages/Nosotros'
import Servicios from '../pages/Servicios'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='nosotros' element={<Nosotros/>}/>
     <Route path='servicios' element={<Servicios/>}/>
    </Routes>      
    </BrowserRouter>
  )
}

export default Router
