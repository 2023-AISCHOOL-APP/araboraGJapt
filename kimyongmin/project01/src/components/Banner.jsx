import React, {useState} from 'react'
import './css/Banner.css'
import Price from './Price'
import News from './News'
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';



const Banner = ({address}) => {
  const [open, setOpen] = useState(false);

  const [moveButton,setMoveButton] = useState('price')

  /**버튼 클릭시 작동하는 함수 */
  const buttonClick = (buttonName) => {
  setMoveButton(buttonName)
  setOpen(!open)
}



  return (
    <div className='banner'>
      <div className='button'>
        <Button
          className={moveButton === 'price' ? 'active' : ''}
          id='price'
          onClick={() => buttonClick('price')}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >시세
        </Button>
        <Button
          className={moveButton === 'policy' ? 'active' : ''}
          id='policy'
          onClick={() => buttonClick('policy')}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >정책
        </Button>
      </div> {/* 해당 버튼의 상태에 따라 내용을 보여줍니다. */}
        <Fade in={open}>
          <div id="example-fade-text">
          {moveButton === 'price' && <Price address={address}></Price>}
          </div>
        </Fade>
        <Fade in={open}>
          <div id="example-fade-text">
          {moveButton === 'policy' && <News policybutton={moveButton}></News>}
          </div>
        </Fade>

    </div>
  )
}

export default Banner