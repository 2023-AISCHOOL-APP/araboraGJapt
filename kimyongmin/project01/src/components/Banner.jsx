import React, {useState} from 'react'
import './InputArea.css'
import Price from './Price'
import News from './News'



const Banner = () => {

  const [moveButton,setMoveButton] = useState('')

  /**버튼 클릭시 작동하는 함수 */
  const buttonClick = (buttonName) => {
  setMoveButton(buttonName)
}



  return (
    <div className='banner'>
        <button className={moveButton === 'price' ? 'active' : ''}
        onClick={() => buttonClick('price')} id='price'>시세</button>

        <button className={moveButton === 'news' ? 'active' : ''}
        onClick={() => buttonClick('news')} id='news'>뉴스</button>
        
        {/* 해당 버튼의 상태에 따라 내용을 보여줍니다. */}
        {moveButton === 'price' && <Price></Price>}
        {moveButton === 'news' && <News></News>}
    </div>
  )
}

export default Banner