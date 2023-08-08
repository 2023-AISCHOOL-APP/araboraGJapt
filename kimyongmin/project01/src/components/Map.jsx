import React, { useEffect, useState } from 'react'
import GwangjuAdd from './dong positions.json'

const { kakao } = window;


const Map = ({ address }) => { // address를 프로프스로 받음
  
  const mapAdd = address;

  const [map, setMap] = useState(null); // map 상태 추가

  const [infoWindow, setInfoWindow] = useState(false); //인포윈도 열고닫기 구현


  /** 사용자가 검색한 동과 json파일 동의 이름이 일치할시 json파일 좌표 구해주는 함수 */
  const add = GwangjuAdd.positions.find((add) => add.dong === mapAdd);

  useEffect(() => {
    if (add) { // add 값이 유효한 경우에만 실행
      const mapInstance = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
        center: new kakao.maps.LatLng(add.x, add.y), // 지도의 중심좌표 
        level: 6 // 지도의 확대 레벨 
      });
      
      setMap(mapInstance); // map 값을 상태에 업데이트
    }
  }, [add]); // add 값이 변경될 때마다 실행

  useEffect(() => {
    if (map) {
      var markers = GwangjuAdd.positions.map(function (position, i) {
        var maks = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(position.x, position.y)
        });
    
        /**인포윈도우에 표시될 컨텐츠 함수 */
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div>${position.gu} ${position.dong} <br/> 예측시세 : 1,000,000,000</div>`
        });

        // 마커를 클릭했을 때 정보 창을 표시하기 위해 클릭 이벤트 리스너를 추가
        kakao.maps.event.addListener(maks, 'click', function () {
          if (infoWindow) {
            infoWindow.close(); // 다른 인포윈도우 닫기
          }
          
          infowindow.open(map, maks);
          setInfoWindow(infowindow); // 현재 열린 인포윈도우 업데이트
        
        });

        return maks;
      });

      // 마커 클러스터러를 생성합니다 
      const clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
        minLevel: 10 // 클러스터 할 최소 지도 레벨 
      });

      // 클러스터러에 마커들을 추가합니다
      clusterer.addMarkers(markers);
    }
  }, [map, infoWindow]); // map 값이 변경될 때마다 실행



  return (
    <div style={{ width: '700px', height: '800px' }}>
      <div id="map" style={{ width: '700px', height: '100%' }}></div>
    </div>
  )
}

export default Map