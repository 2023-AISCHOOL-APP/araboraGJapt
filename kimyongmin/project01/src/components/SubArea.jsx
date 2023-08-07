import React from 'react'
import TradeLog from './TradeLog'
import Ranking from './Ranking'

const SubArea = () => {
  return (
    <div>
        <div>
            <Ranking/>
        </div>
        <br/>
        <div>
            <TradeLog/>
        </div>
    </div>
  )
}

export default SubArea