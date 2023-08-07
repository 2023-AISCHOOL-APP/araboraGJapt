import React from 'react'
import Table from 'react-bootstrap/Table';
import './css/TradeLog.css'

function TradeLog() {

  const tableStyle = {
    borderCollapse: 'collapse',
    border: '3px solid plum' // 원하는 윤곽선 스타일 적용
  };

  const cellStyle = {
    border: '1px solid plum', // Border style for cells (td and th)
    padding: '8px', // Add padding for better spacing
  };

  return (
    <Table style={tableStyle} className='TradeTable'>
      <thead>
        <tr>
          <th style={cellStyle}>#</th>
          <th style={cellStyle}>First Name</th>
          <th style={cellStyle}>Last Name</th>
          <th style={cellStyle}>Username</th>
          <th style={cellStyle}>Username</th>
          <th style={cellStyle}>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={cellStyle}>1</td>
          <td style={cellStyle}>Mark</td>
          <td style={cellStyle}>Otto</td>
          <td style={cellStyle}>@mdo</td>
          <td style={cellStyle}>@mdo</td>
          <td style={cellStyle}>@mdo</td>
        </tr>
        <tr>
          <td style={cellStyle}>2</td>
          <td style={cellStyle}>Jacob</td>
          <td style={cellStyle}>Thornton</td>
          <td style={cellStyle}>@fat</td>
          <td style={cellStyle}>@fat</td>
          <td style={cellStyle}>@fat</td>
        </tr>
        <tr>
          <td style={cellStyle}>3</td>
          <td style={cellStyle}>Larry the Bird</td>
          <td style={cellStyle}>@twitter</td>
          <td style={cellStyle}>@twitter</td>
          <td style={cellStyle}>@twitter</td>
          <td style={cellStyle}>@twitter</td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default TradeLog;