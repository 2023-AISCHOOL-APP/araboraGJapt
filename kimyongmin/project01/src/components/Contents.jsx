import React  from 'react'
import Banner from './Banner'
import Map from './Map'
import './css/Contents.css'


const Contents = ({address}) => {

  return (
    <div>
        <div className='contents'>
            <Banner address={address}/>
            <Map address={address}/>
        </div>
    </div>
  )
}

export default Contents