import React, {useState} from 'react';
import InputArea from'./components/InputArea';
import Header from './components/Header';
import SubArea from './components/SubArea';
import {AddrContext} from './Contexts/AddrContext'
import {ClickMain} from './Contexts/ClickMain'
import './App.css'

function UserInput() {

  /** 폼 제출 시 호출되는 함수를 정의 */
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Map 컴포넌트에서 Price 컴포넌트로 좌표 주소 값을 보내주기 위한 useState
  const [priceArea, setPriceArea] = useState('');

  const [showSubarea, setShowSubarea] = useState(true);

  return (
    <div>
      <ClickMain.Provider value={{showSubarea, setShowSubarea}}>
        <AddrContext.Provider value={{ priceArea, setPriceArea}}>
          <div className='app-container' onSubmit={handleSubmit}>
              <Header/>
              <div className='input_area'>
                <InputArea/>
              </div>
              <div className='sub-container'>
              {showSubarea ? <SubArea/> : null}
              </div>
          </div>
        </AddrContext.Provider>
      </ClickMain.Provider>
    </div>
  );
}

export default UserInput;
