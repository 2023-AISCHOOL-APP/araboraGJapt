import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';

const Price = () => {

  const [valuePrice, setValuePrice] = useState('')

  const priceClick = (value) => {
    setValuePrice(value)
  }

  return (
    <Form.Select aria-label="Default select example">

      <option>예측 시기</option>
      <option value="1" onClick={()=>priceClick('1')}>1년후</option>
      <option value="2" onClick={()=>priceClick('2')}>2년후</option>
      <option value="3" onClick={()=>priceClick('2')}>3년후</option>
      <div>
      {valuePrice === '1' && <span>1년후 시세</span>}
      </div>
    </Form.Select>
  )
}

export default Price