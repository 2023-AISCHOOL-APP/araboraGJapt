import Apart from '../img/apartment.png'
import './css/Ranking.css'
import Crown from '../img/crown.png'
import FuturePrice from './result2.json'

function Ranking() {

  const textStyle = {
    overflow: 'hidden', // 내용이 넘칠 경우 숨기기
    textOverflow: 'ellipsis', // 넘치는 내용을 ...으로 표시
  }


  return (
    <div className="Cards">
      <img src={Crown} width='100px' className='crownimg'/>
      <div className='best-card' id='card1' >
        <h3 style={textStyle}>광주광역시 예측 최고가 지역</h3>
        <img variant="top" src={Apart} width='100px'/>
        <div>
          <h4 className='card-text'> 
            남구 봉선동
            </h4>
            <h4 className='card-text2' style={textStyle}>
            예측 시세 : 4억1557만
          </h4>
          <br/>
        </div>
      </div>

    </div>
  );
}

export default Ranking;