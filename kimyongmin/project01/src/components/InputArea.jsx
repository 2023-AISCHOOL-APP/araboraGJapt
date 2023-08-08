import React, { useState, useRef } from 'react';
import Contents from './Contents';
import './css/InputArea.css'; // InputArea.css 파일을 임포트
import picSrc from '../img/2016-env073-0001.jpg'

// useState 훅을 사용하여 상태 값과 상태를 업데이트하는 함수를 정의
const InputArea = () => {
  const [inputValue, setInputValue] = useState('');

  /** 입력 필드의 값이 변경시 호출되는 함수를 정의 */
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const contentRef = useRef();

  // Contents 컴포넌트 보이기 여부를 상태로 관리
  const [showContents, setShowContents] = useState(false);

  const [inputMap, setInputMap] = useState('');

  /** 클릭이벤트 실행시 구현되는 함수 */
  const addadr = () => {
    console.log(contentRef.current.defaultValue);
    setInputMap(contentRef.current.defaultValue);
    setShowContents(true);
  
  };

  /** enter키를 쳤을때 동작되는 함수 */
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addadr();
    }
  };

  return (
    <div className="input-area-container" style={{ marginTop: showContents ? '0px' : '100px' }}>
      <div className='input-area-box' >
        <input
          className="input-field"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="검색하고자 하는 지역을 검색해주세요"
          onKeyDown={handleKeyDown} // 키보드 Enter 이벤트 처리
          ref={contentRef}
        />
        <button onClick={addadr} className="search-button" type="submit">
          검색
        </button>
      </div>
      {showContents ? <Contents address={inputMap}/> : null} 
      {/* showContents 상태가 true일 때에만 Contents 컴포넌트를 렌더링 <img src={picSrc} height= '500px'/> */}

    </div>
  );

};

export default InputArea;
