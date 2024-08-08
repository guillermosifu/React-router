import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='header'>
      <span><img src={Logo} alt="" /></span>
      <nav>
        <ul className='lista'>
            <li><a href="">Home</a></li>
            <li>Nosotros</li>
            <li>servicio</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
