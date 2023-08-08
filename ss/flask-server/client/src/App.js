import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  // state
  const [data, setData] = useState([{}])

  useEffect(() => 
    {
      // http://localhost:3000/users
      // http://127.0.0.1:5000
    	fetch("users").then(
          response => response.json()

        ).then(
          
          data => {
            console.log(data)
            // 받아온 데이터를 data 변수에 update
            setData(data);
          }
        ).catch(
          (err) => console.log(err)
        )
    }, [])

  return (
    <div className='App'>
      <h1>test 하는 중...</h1>
      <div>
        {/* 삼항연산자 */}
        { (typeof data.members === 'undefined') ? (
          // fetch가 완료되지 않았을 경우에 대한 처리
          <p>loding...</p>
        ) : (
          data.members.map((m) => <p>{m.name}</p>)
        )}
      </div>
    </div>
  )
}

export default App;