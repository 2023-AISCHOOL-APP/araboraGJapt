import Apart from '../img/apartment.png'
import './css/Ranking.css'
import Crown from '../img/crown.png'

function Ranking() {
  return (
    <div className="Cards">
      <img src={Crown} width='100px' className='crownimg'/>

      <div className='best-card' id='card1'>
        <h3>광주광역시 예측 최고가 지역</h3>
        <img variant="top" src={Apart} width='100px'/>
        <div>
          <h4 className='card-text'> 
            남구 봉선동
            </h4>
            <h4 className='card-text2'>
            예측 시세 : 12,000,000,000
          </h4>
          <br/>
        </div>
      </div>

    </div>
  );
}

export default Ranking;