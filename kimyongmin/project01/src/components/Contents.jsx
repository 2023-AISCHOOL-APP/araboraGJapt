import React from 'react'
import Banner from './Banner'
import Map from './Map'
import './InputArea.css'


const Contents = () => {
  return (
    <div>
        <div className='contents'>
            <Banner></Banner>
            <Map></Map>
        </div>
    </div>
  )
}

export default Contents