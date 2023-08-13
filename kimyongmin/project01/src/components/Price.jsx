import React, {useContext , useEffect, useState} from 'react'
import { AddrContext } from '../Contexts/AddrContext'
import GwangjuAdd from './dong positionsfinal.json'
import FuturePrice from './result2.json'
import './css/Price.css'
import { Line } from 'react-chartjs-2';


const Price = ({ address }) => {
  const { priceArea } = useContext(AddrContext);

  /** Map컴포넌트에서 받아온 오브젝트에서 코드만 따로 빼기 */
  const sellectCode = priceArea.code

/**광주 지역 이름 json파일 접근 */
  const dataCode = GwangjuAdd.positions

  const [collectCode, setCollectCode] = useState()

  const [userCode, setUserCode] = useState()

  /** 프롭스로 받아온 검색창 입력값 동 이름 */
  const mapAdd = address;

  /** 유저가 검색한 동 이름과 광주지역 json 파일 동 이름 비교 후 같은 값 오브젝트 저장 */
  const add = GwangjuAdd.positions.find((add) => add.dong === mapAdd);

  const reverseData = {}; // 뒤집어서 추가할 객체 생성

// FuturePrice 배열의 각 항목에 대해 반복
for (const item of FuturePrice) {
  const code = item.code; // 각 항목의 code 값
  reverseData[code] = item; // reverseData 객체에 추가
}

  /** Map컴포넌트에서 마커 클릭 시 코드와 시세 json 파일 코드 비교 및 인덱싱 */
  useEffect(() => {
    for(let i=0; i < 86; i++) {
        if (sellectCode === dataCode[i].code){
            //console.log('마커에 입력된 코드는', sellectCode, '맞는 코드는' , dataCode[i].code);
            setCollectCode(dataCode[i])
            //console.log('Map컴포넌트에서 넘어온 값과 일치한 코드의 동' , collectCode);
        }
    }
}, [sellectCode, dataCode]);

/** 검색창 입력 동에 대한 코드와 시세 json 파일 코드 비교 및 인덱싱 */
useEffect(() => {
  for(let i=0; i < 86; i++) {
      if (add.code === dataCode[i].code){
          //console.log('마커에 입력된 코드는', add.code, '맞는 코드는' , dataCode[i].code);
          const inputCode = dataCode[i].code
          setUserCode(reverseData[inputCode])
          //console.log('Map컴포넌트에서 넘어온 값과 일치한 코드의 동' , userCode);
      }
  }
}, [add.code, userCode]);

const chartData = {
  labels: ['1년 후', '2년 후', '3년 후'],
  datasets: [
    {
      label: '부동산 가격',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        priceArea ? priceArea.year1 : userCode ? userCode.year1 : null,
        priceArea ? priceArea.year2 : userCode ? userCode.year2 : null,
        priceArea ? priceArea.year3 : userCode ? userCode.year3 : null,
      ],
    },
  ],
};


return (
<div className="price-box">
      <div className="price-title">부동산 가격 예측</div>
      <div className="price-subtitle">(단위: 만원)</div>
      <div className="price-area">
        <strong>주소:</strong>{' '}
        {priceArea
          ? collectCode
            ? `${collectCode.gu} ${collectCode.dong}`
            : null
          : add
          ? `${add.gu} ${add.dong}`
          : null}
      </div>
      <div className="price-area">
        <strong>1년 후 시세:</strong>{' '}
        {priceArea
          ? priceArea.year1 !== undefined
            ? priceArea.year1
            : null
          : add
          ? userCode && userCode.year1 !== undefined
            ? userCode.year1
            : null
          : null}
      </div>
      <div className="price-area">
        <strong>2년 후 시세:</strong>{' '}
        {priceArea
          ? priceArea.year2 !== undefined
            ? priceArea.year2
            : null
          : add
          ? userCode && userCode.year2 !== undefined
            ? userCode.year2
            : null
          : null}
      </div>
      <div className="price-area">
        <strong>3년 후 시세:</strong>{' '}
        {priceArea
          ? priceArea.year3 !== undefined
            ? priceArea.year3
            : null
          : add
          ? userCode && userCode.year3 !== undefined
            ? userCode.year3
            : null
          : null}
      </div>
      <div className="price-chart">
        <Line data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default Price;