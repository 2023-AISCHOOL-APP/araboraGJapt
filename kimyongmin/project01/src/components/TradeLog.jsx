import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './css/TradeLog.css';
import ApartTrade from './aparttrade.json';

function TradeLog() {
  const tableStyle = {
    borderCollapse: 'collapse',
    border: '5px solid plum',
    tableLayout: 'fixed', // 고정 테이블 레이아웃 설정
    width: '150%' // 초기에는 화면 전체 너비로 설정
  };

  const cellStyle = {
    border: '3px solid plum',
    padding: '3px',
    whiteSpace: 'nowrap',
    overflow: 'hidden', // 내용이 넘칠 경우 숨기기
    textOverflow: 'ellipsis', // 넘치는 내용을 ...으로 표시
    textAlign: 'center' // 가운데 정렬
  };

  const [displayedData, setDisplayedData] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedData((prevIndex) => (prevIndex + 5) % ApartTrade.length);
    }, 3000); // 3초마다 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);

  return (
    <Table style={tableStyle} className='TradeTable'>
      <thead>
        <tr className='tablehead'>
          <th className='table-cell' style={cellStyle}>지역</th>
          <th className='table-cell' style={cellStyle}>아파트</th>
          <th className='table-cell' style={cellStyle}>면적(㎡)</th>
          <th className='table-cell' style={cellStyle}>거래일자</th>
          <th className='table-cell' style={cellStyle}>거래 값(만원)</th>
        </tr>
      </thead>
      <tbody>
        {ApartTrade.slice(displayedData, displayedData + 5).map((item, index) => (
          <tr key={index}>
            <td className='table-cell' style={cellStyle}>{item.address}</td>
            <td className='table-cell' style={cellStyle}>{item.apart}</td>
            <td className='table-cell' style={cellStyle}>{item.size}</td>
            <td className='table-cell' style={cellStyle}>{item.date}</td>
            <td className='table-cell' style={cellStyle}>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TradeLog;
