import React from 'react'
import Logo from '../img/ARABORALOGO2.png'
import './css/Header.css'

const Header = () => {
  return (
    <div>
        <img className='logo' src={Logo} width='180px'/>
    </div>
  )
}

export default Header