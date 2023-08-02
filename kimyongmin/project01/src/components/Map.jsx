import React, { useEffect } from 'react'
import seoulCafe from './seoulCafe.json'

const { kakao } = window;


const Map = () => {

  useEffect(() => {
    const map = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
      center: new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표 
      level: 10 // 지도의 확대 레벨 
    });
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







  }, [])

  return (
    <div style={{ width: '700px', height: '800px' }}>
      <div id="map" style={{ width: '700px', height: '100%' }}></div>
    </div>
  )
}

export default Map