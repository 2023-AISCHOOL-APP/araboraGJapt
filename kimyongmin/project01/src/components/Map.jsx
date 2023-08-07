import React, { useEffect, useState } from 'react'
import seoulCafe from './seoulCafe.json'

const { kakao } = window;


const Map = ({ address }) => { // address를 프로프스로 받음
  
  const mapAdd = address;

  const [map, setMap] = useState(null); // map 상태 추가

  /** 사용자가 검색한 동과 json파일 동의 이름이 일치할시 json파일 좌표 구해주는 함수 */
  const add = seoulCafe.positions.find((add) => add.dong === mapAdd);

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
      var markers = seoulCafe.positions.map(function (position, i) {
        var maks = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(position.x, position.y)
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
  }, [map]); // map 값이 변경될 때마다 실행



  return (
    <div style={{ width: '700px', height: '800px' }}>
      <div id="map" style={{ width: '700px', height: '100%' }}></div>
    </div>
  )
}

export default Map