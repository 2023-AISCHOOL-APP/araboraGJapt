import React  from 'react'
import Banner from './Banner'
import Map from './Map'
import './css/Contents.css'


const Contents = ({ inputMap, showContents }) => {

  const childProps = {
    inputMap: inputMap,
    showContents: showContents,
  };
  
  return (
    <div>
        <div className='contents'>
            <Banner address={inputMap}/>
            <Map {...childProps}/>
        </div>
    </div>
  )
}

export default Contents