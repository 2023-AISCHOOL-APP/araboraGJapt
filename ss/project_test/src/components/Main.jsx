import React from 'react'
import SearchBar from './SearchBar'
import Left from './Left'
import Right from './Right'
import Footer from './Footer'

const Info = () => {
  return (
    <div>
        <div className='header'>
          <div className='container'>
            <SearchBar/>
          </div>
        </div>
        <div className='body'>
            <div className='left'><Left/></div>
            <div className='right'><Right/></div>
        </div>
        <div className='footer'><Footer/></div>
    </div>
  )
}

export default Info