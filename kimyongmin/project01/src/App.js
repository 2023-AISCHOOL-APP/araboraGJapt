import React, { useState } from 'react';
import InputArea from'./components/InputArea'
import picSrc from './img/2016-env073-0001.jpg'
import Logo from './img/ARABORALOGO.png'
import Map from './components/Map'
import './App.css'

function UserInput() {

  // 폼 제출 시 호출되는 함수를 정의합니다.
  const handleSubmit = (event) => {
    event.preventDefault();
    // 입력값 처리 또는 다른 작업을 수행하는 함수를 호출하거나 상위 컴포넌트로 입력값을 전달할 수 있습니다.
    // 예: props.onSubmit(inputValue);
  };

  return (
    <div onSubmit={handleSubmit}>
      <br/>
        <img className='logo' src={Logo} width='180px'/>
        <InputArea></InputArea>
        <div className='contents'>
          <div className='list'>
          </div>
          {/* <img src={picSrc} width='1100px'></img> */}
          <Map style={{border : '3px solid gold'}}></Map>
        </div>

    </div>
  );
}

export default UserInput;
