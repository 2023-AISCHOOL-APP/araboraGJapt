import React from 'react'
import TradeLog from './TradeLog'
import Ranking from './Ranking'
import './css/SubArea.css'

const SubArea = () => {
  return (
    <div className='subarea-container'>
        <div className='subarea-container'>
            <Ranking/>
            <TradeLog/>
        </div>
    </div>
  )
}

export default SubArea