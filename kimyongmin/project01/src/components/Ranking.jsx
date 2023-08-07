import Card from 'react-bootstrap/Card';
import Apart from '../img/apartment.png'
import './css/Ranking.css'

function Ranking() {
  return (
    <div className="Cards">
      <Card className='best-card' id='card1'>
        <Card.Img variant="top" src={Apart} width='100px'/>
        <Card.Body>
          <Card.Title>남구 봉선동</Card.Title>
          <Card.Text>
            예측 시세 : 12,000,000,000
            <br/>
            광주광역시 예측 최고가 지역
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='best-card' id='card2'>
        <Card.Img variant="top" src={Apart} width='100px'/>
        <Card.Body>
          <Card.Title>북구 양산동</Card.Title>
          <Card.Text>
          예측 시세 : 2,000,000,000
            <br/>
            광주광역시 예측 최저가 지역
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Ranking;