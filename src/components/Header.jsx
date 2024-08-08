import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <header className='header'>
      <span><img src={Logo} alt="" /></span>
      <nav>
        <ul className='lista'>
            <li><Link className='nav' to="/">Home</Link></li>
            <li><Link className='nav' to="nosotros">Nosotros</Link></li>
            <li><Link className='nav' to="servicios">servicio</Link> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
