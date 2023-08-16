import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Graph = ({ data }) => {

  const collectdata = data;

  const graphData = [
    { "date" : "6개월 후", "price" : collectdata.month6,  },
    { "date" : "1년 후", "price" : collectdata.year1,  },
    { "date" : "2년 후", "price" : collectdata.year2,  },
    { "date" : "3년 후", "price" : collectdata.year3, }
  ];

  return (
    <LineChart width={270} height={300} data={graphData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" tick={{ fontSize: 12 }}/>
      <YAxis
        domain={[35000, 43500]}
        tick={{ fontSize: 12 }}
        label={{ value: '단위(만원)', angle: -90, position: 'insideLeft' }}
      />
      <Tooltip />
      <Legend />
      
      <Line
        key='date'
        type="monotone"
        dataKey='price' // 수정: dataKey 값을 동적으로 설정
        stroke='#f54242'
      />
    </LineChart>
  );
}

export default Graph;
