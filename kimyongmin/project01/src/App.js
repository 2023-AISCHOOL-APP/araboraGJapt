import React from 'react';
import InputArea from'./components/InputArea';
import Header from './components/Header';
import SubArea from './components/SubArea';
import './App.css'


function UserInput() {
 
  /** 폼 제출 시 호출되는 함수를 정의 */
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className='app-container' onSubmit={handleSubmit}>
          <Header/>
          <div className='input_area'>
            <InputArea/>
          </div>
          <div className='sub-container'>
          <SubArea/>
          </div>
          
      </div>
    </div>
  );
}

export default UserInput;
