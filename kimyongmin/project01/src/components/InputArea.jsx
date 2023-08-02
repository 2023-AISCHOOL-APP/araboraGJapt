import React, { useState , useRef } from 'react';
import Contents from './Contents';
import './InputArea.css'; // InputArea.css 파일을 임포트

// useState 훅을 사용하여 상태 값과 상태를 업데이트하는 함수를 정의
const InputArea = () => {
  const [inputValue, setInputValue] = useState('');

// 입력 필드의 값이 변경시 호출되는 함수를 정의
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const contentRef = useRef()

    //Contents 컴포넌트 보이기 여부를 상태로 관리
    const [showContents, setShowContents] = useState(false);

  const addadr = () => {
    console.log(contentRef.current.defaultValue);
    setShowContents(true);
  }

  return (
  <div className="input-area-container">
            <br/>
      <div>
        <input
          className="input-field"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="검색하고자 하는 지역을 검색해주세요"
          ref={contentRef}
        />
        <button onClick = {addadr} className="search-button" type="submit">
          검색
        </button>
      </div>
      {showContents && <Contents/>}
      {/* showContents 상태가 true일 때에만 Contents 컴포넌트를 렌더링 */}

    </div>
  );
  
};

export default InputArea;
