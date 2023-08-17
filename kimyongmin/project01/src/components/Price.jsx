import React, {useContext , useEffect, useState} from 'react'
import { AddrContext } from '../Contexts/AddrContext'
import GwangjuAdd from './dong positionsfinal.json'
import FuturePrice from './finalfinalresult.json'
import Graph from './Graph'
import './css/Price.css'

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

/** 검색창 입력 동에 대한 코드와 시세 json 파일 코드 비교 및 인덱싱 */
useEffect(() => {
  if (sellectCode && dataCode) {
    for (let i = 0; i < 86; i++) {
      if (sellectCode === dataCode[i].code) {
        setCollectCode(dataCode[i]);
      }
    }
  }
}, [sellectCode, dataCode]);

  /** Map컴포넌트에서 마커 클릭 시 코드와 시세 json 파일 코드 비교 및 인덱싱 */
  useEffect(() => {
    if (add && dataCode) { // add와 dataCode가 모두 정의되어 있는 경우에만 실행
      for (let i = 0; i < 86; i++) {
        if (add.code === dataCode[i].code) {
          const inputCode = dataCode[i].code;
          setUserCode(reverseData[inputCode]);
        }
      }
    }
  }, [add, dataCode]);

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

      <Graph data={priceArea}/>
      <div className='price84' style={{ fontSize: '12px' }}>
        ※ 84㎡ 기준
      </div>
      </div>
  );
};

export default Price;