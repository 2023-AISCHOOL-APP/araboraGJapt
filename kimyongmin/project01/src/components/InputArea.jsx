import React, { useState, useRef, useContext } from 'react';
import Contents from './Contents';
import './css/InputArea.css'; // InputArea.css 파일을 임포트
import GwangjuAdd from './dong positions.json'
import {ClickMain} from '../Contexts/ClickMain'
import axios from 'axios'

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
  const addadr = async () => { // async 함수로 변경
    const userInput = contentRef.current.defaultValue;
    console.log('입력값', userInput);
    setInputMap(userInput);
    if (dongadd.includes(userInput)) {
      setShowContents(true);
      setShowSubarea(false);
      
      try {
        const response = await axios.post('/api/predict', { input: userInput }); // await로 응답을 기다림
        const predictions = response.data;
        console.log('1년후 예측 :', predictions.prediction1);
        console.log('2년후 예측 :', predictions.prediction2);
        console.log('3년후 예측 :', predictions.prediction3);
        // 여기에서 prediction 값을 사용할 수 있습니다.
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('해당 지역은 검색 가능한 지역이 아닙니다.');
      if (showContents === true) {
        setShowSubarea(false); // Contents 컴포넌트 숨기기
      }
      return; 
    }
  };

  /** enter키를 쳤을때 동작되는 함수 */
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // 기본 동작 막기
      addadr();
    }
  };
  const childProps = {
    inputMap: inputMap,
    showContents: showContents,
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
          onKeyPress={handleKeyPress} // 키보드 Enter 이벤트 처리
          ref={contentRef}
        />
        <button onClick={addadr} className="search-button" type="submit">
          검색
        </button>
      </div>
      {showContents ? <Contents {...childProps}/> : null} 
      {/* showContents 상태가 true일 때에만 Contents 컴포넌트를 렌더링 */}

    </div>
  );

};

export default InputArea;
