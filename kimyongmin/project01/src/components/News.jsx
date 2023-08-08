import React from 'react'
import image2 from '../img/image2.jpg'
import './css/News.css'

const News = () => {
  return (
  <div style={{ width: '18rem' }} className='newimg'>
        <img src={image2} width='200px'/>
        <div>
          <h5>리오넬 메시 미국리그 평정</h5>
          <p>
          리오넬 메시가 4경기 7골 1도움을 기록하며 미국리그 꼴지팀에서 미국무대를 폭격하고 있다.
          </p>
          <button>뉴스로 이동</button>
        </div>
        
      </div>
      
  )
}

export default News