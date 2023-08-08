import React from 'react'
import Logo from '../img/ARABORALOGO2.png'
import './css/Header.css'


const Header = () => {

  /**로고 클릭 시 페이지 새로고침하는 함수 */
  const handleImageClick = () => {
    window.location.reload(); 
  }

  return (
    <div className="header-container">
        <img className='logo' src={Logo} width='180px' onClick={handleImageClick}/>
    </div>
    
  )
}

export default Header