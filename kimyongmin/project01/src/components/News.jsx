import React, { useState, useEffect } from 'react';
import './css/News.css';
import Policy from './policy(lee ~ yoon).json';

const News = ({ policybutton }) => {
  const policyHeight = 120; // 한 개 정책이 차지하는 높이 (예상)
  const policiesPerPage = 7; // 한 번에 보여줄 정책 개수
  const maxContainerHeight = policiesPerPage * policyHeight; // 컨테이너 최대 높이

  const [showPolicies, setShowPolicies] = useState([]); // 보여줄 정책 데이터 상태
  let startIndex = 0; // 데이터 시작 인덱스

  useEffect(() => {
    if (policybutton) {
      // 초기 렌더링 시, policiesPerPage 개수의 정책을 보여줌
      const endIndex = startIndex + policiesPerPage;
      const policiesToShow = Policy.slice(startIndex, endIndex);
      setShowPolicies(policiesToShow);

      startIndex = (endIndex >= Policy.length) ? 0 : endIndex;

      // 3초마다 정책 업데이트
      const interval = setInterval(() => {
        const endIndex = startIndex + policiesPerPage;
        const policiesToShow = Policy.slice(startIndex, endIndex);
        setShowPolicies(policiesToShow);

        startIndex = (endIndex >= Policy.length) ? 0 : endIndex;
      }, 3000); // 3초마다 변경

      // 컴포넌트가 언마운트될 때 interval 정리
      return () => clearInterval(interval);
    }
  }, [policybutton]);

  return (
    <div className="news-container" style={{ maxHeight: maxContainerHeight + 'px' }}>
      {showPolicies.map((item, index) => (
        <div key={index} className="news-item">
          <div className="news-box">
            <p className="news-date">{item.date}</p>
            <p className="news-content">{item.content.length > 30 ? item.content.substring(0, 30) + '...' : item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
