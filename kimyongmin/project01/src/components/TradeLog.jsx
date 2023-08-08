import React from 'react'
import Table from 'react-bootstrap/Table';
import './css/TradeLog.css'

function TradeLog() {

  /**윤곽선 스타일 적용 */
  const tableStyle = {
    borderCollapse: 'collapse',
    border: '5px solid plum'
  }
  /** 셀 스타일 적용 */
  const cellStyle = {
    border: '3px solid plum', 
    padding: '8px',
    whiteSpace: 'nowrap'
  };

  return (
    <Table style={tableStyle} className='TradeTable'>
      <thead>
        <tr className='tablehead'>
          <th style={cellStyle}>지역</th>
          <th style={cellStyle}>아파트</th>
          <th style={cellStyle}>면적</th>
          <th style={cellStyle}>거래일자</th>
          <th style={cellStyle}>거래 값</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={cellStyle}>광산구 장덕동</td>
          <td style={cellStyle}>우미린2차아파트</td>
          <td style={cellStyle}>108㎡</td>
          <td style={cellStyle}>2023.07</td>
          <td style={cellStyle}>400,000,000</td>
        </tr>
        <tr>
          <td style={cellStyle}>동구 학동</td>
          <td style={cellStyle}>무등산아이파크</td>
          <td style={cellStyle}>84㎡</td>
          <td style={cellStyle}>2023.06</td>
          <td style={cellStyle}>260,000,000</td>
        </tr>
        <tr>
          <td style={cellStyle}>남구 봉선동</td>
          <td style={cellStyle}>한국아델리움1단지</td>
          <td style={cellStyle}>164㎡</td>
          <td style={cellStyle}>2023.03</td>
          <td style={cellStyle}>1,300,000,000</td>
        </tr>
        <tr>
          <td style={cellStyle}>서구 쌍촌동</td>
          <td style={cellStyle}>현대아파트</td>
          <td style={cellStyle}>78㎡</td>
          <td style={cellStyle}>2022.12</td>
          <td style={cellStyle}>177,000,000</td>
        </tr>
        <tr>
          <td style={cellStyle}>북구 본촌동</td>
          <td style={cellStyle}>양산지구현진에버빌</td>
          <td style={cellStyle}>115㎡</td>
          <td style={cellStyle}>2022.08</td>
          <td style={cellStyle}>420,000,000</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TradeLog;