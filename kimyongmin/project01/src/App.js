import React, { useState,useRef } from 'react';
import InputArea from'./components/InputArea'

import Logo from './img/ARABORALOGO.png'
import './App.css'


function UserInput() {
 
  /** 폼 제출 시 호출되는 함수를 정의 */
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='app-container' onSubmit={handleSubmit}>
        <div>
        <img className='logo' src={Logo} width='180px'/>
        </div>

        <div className='input_area'>
          <InputArea/>
        </div>
        
    </div>
  );
}

export default UserInput;
