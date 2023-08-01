import React, { useState } from 'react';
import InputArea from'./components/InputArea'
import picSrc from './img/2016-env073-0001.jpg'
import Logo from './img/ARABORALOGO.png'
import './App.css'
import LeftArea from './components/LeftArea'

function UserInput() {

  /** 폼 제출 시 호출되는 함수를 정의 */
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div onSubmit={handleSubmit}>
      <br/>
        <img className='logo' src={Logo} width='180px'/>
        <InputArea></InputArea>
        <LeftArea></LeftArea>
          {/* <img src={picSrc} width='1100px'></img> */}
    </div>
  );
}

export default UserInput;
