import React, { useState, useRef, useContext } from 'react';
import Contents from './Contents';
import './css/InputArea.css'; // InputArea.css 파일을 임포트
import GwangjuAdd from './dong positions.json'
import {ClickMain} from '../Contexts/ClickMain'

// useState 훅을 사용하여 상태 값과 상태를 업데이트하는 함수를 정의
const InputArea = () => {
  const [inputValue, setInputValue] = useState('');

  const {setShowSubarea} = useContext(ClickMain)

  /** 입력 필드의 값이 변경시 호출되는 함수를 정의 */
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const contentRef = useRef();

  // Contents 컴포넌트 보이기 여부를 상태로 관리
  const [showContents, setShowContents] = useState(false);

  const [inputMap, setInputMap] = useState('');

  const dongadd = []

  for (let i=0; i<202; i++){
    dongadd.push(GwangjuAdd.positions[i].dong)
  }

  /** 클릭이벤트 실행시 구현되는 함수 */
  const addadr = () => {
    const userInput = contentRef.current.defaultValue
    console.log('입력값', userInput);
    setInputMap(userInput);
    if (dongadd.includes(userInput)) 
      {setShowContents(true);
    setShowSubarea(false);}
      else{
      alert('해당 지역은 검색 가능한 지역이 아닙니다.');
      if (showContents == true){
      setShowSubarea(false);} // Contents 컴포넌트 숨기기
      return;
    }
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
      {/* showContents 상태가 true일 때에만 Contents 컴포넌트를 렌더링 */}

    </div>
  );

};

export default InputArea;
