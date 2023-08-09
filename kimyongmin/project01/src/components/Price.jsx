import React, {useContext , useState} from 'react'
import { AddrContext } from '../Contexts/AddrContext'


const Price = ({address}) => {

  const {priceArea} = useContext(AddrContext)

  

  return (

    <div>
      주소는 : {priceArea}
    </div>

  )
}

export default Price