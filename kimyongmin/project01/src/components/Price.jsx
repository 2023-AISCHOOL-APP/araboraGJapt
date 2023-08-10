import React, {useContext , useState} from 'react'
import { AddrContext } from '../Contexts/AddrContext'
import GwangjuAdd from './dong positions.json'
import './css/Price.css'




const Price = ({address}) => {

  const {priceArea} = useContext(AddrContext)

  const mapAdd = address;

   /** 사용자가 검색한 동과 json파일 동의 이름이 일치할시 json파일 좌표 구해주는 함수 */
   const add = GwangjuAdd.positions.find((add) => add.dong === mapAdd);

   const cost = GwangjuAdd.positions.find((cost) => cost.dong === priceArea);
   console.log('Map 에서 넘어온 값 :',priceArea, '넘어온 동 값:', cost.code );

  return (

    <div>
      <br/>
      <div className='pricearea'>주소는 : {priceArea} <br/><br/> 1년 후 시세: {cost ? cost.code : null}</div><br/>
      <div className='pricearea'><br/> 2년 후 시세: {cost ? cost.code : null}</div><br/>
      <div className='pricearea'><br/> 3년 후 시세: {cost ? cost.code : null}</div><br/>
    </div>

  )
}

export default Price