import React, {useContext , useState} from 'react'
import { AddrContext } from '../Contexts/AddrContext'
import GwangjuAdd from './dong positions.json'
import './css/Price.css'




const Price = ({ address }) => {
  const { priceArea } = useContext(AddrContext);

  const mapAdd = address;

  const add = GwangjuAdd.positions.find((add) => add.dong === mapAdd);

  const cost = GwangjuAdd.positions.find((cost) => cost.dong === priceArea);

  return (
    <div>
      <br />
      <div className='pricearea'>주소는 : {cost ? priceArea : (add ? address : null)} <br /><br /> 1년 후 시세: {cost ? cost.code : (add ? add.code : null)}</div><br />
      <div className='pricearea'><br /> 2년 후 시세: {cost ? cost.code : (add ? add.code : null)}</div><br />
      <div className='pricearea'><br /> 3년 후 시세: {cost ? cost.code : (add ? add.code : null)}</div><br />
    </div>
  );
};

export default Price;
