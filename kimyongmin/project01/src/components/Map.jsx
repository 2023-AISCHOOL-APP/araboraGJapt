import React, { useEffect, useState , useContext} from 'react'
import GwangjuAdd from './dong positionsfinal.json'
import { AddrContext } from '../Contexts/AddrContext'
import FuturePrice from './finalresult.json'
import RedMarker from '../img/redmarker.png'

const { kakao } = window;

const Map = ({ inputMap, showContents }) => {
  const mapAdd = inputMap;
  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(false);
  const { setPriceArea } = useContext(AddrContext);
  const [collectPrice, setCollectPrice] = useState()
  const [currentAddress, setCurrentAddress] = useState(inputMap);
  const dongPrice = [];
  
  const redMarkerImageURL = RedMarker

  const reverseData = {}; // 뒤집어서 추가할 객체 생성

// FuturePrice 배열의 각 항목에 대해 반복
for (const item of FuturePrice) {
  const code = item.code; // 각 항목의 code 값
  reverseData[code] = item; // reverseData 객체에 추가
}

  //인포윈도우 스타일
  const infoWindowStyle = {
    backgroundColor: 'purple', // 배경색 변경
    color: 'white', // 글자색 변경
    borderRadius: '10px', // 더 둥글게 변경
    padding: '15px', // 패딩값 증가
    width: '250px', // 너비 조정
    fontSize: '14px', // 글자 크기 변경
  };

  const titleStyle = {
    margin: '0',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center', // 가운데 정렬
    marginBottom: '10px', // 아래 여백 추가
  };

  const priceStyle = {
    margin: '5px 0',
    fontSize: '14px', // 글자 크기 변경
  };

  useEffect(() => {
    if (currentAddress) {
      const add = GwangjuAdd.positions.find((add) => add.dong === currentAddress);
      if (add) {
        const mapInstance = new kakao.maps.Map(document.getElementById('map'), {
          center: new kakao.maps.LatLng(add.x, add.y),
          level: 6,
        });

        setMap(mapInstance);
    
      }
    }
  }, [currentAddress]);

  useEffect(() => {
    if (currentAddress) {
      const add = GwangjuAdd.positions.find((add) => add.dong === currentAddress);
      if (add) {
        const mapInstance = new kakao.maps.Map(document.getElementById('map'), {
          center: new kakao.maps.LatLng(add.x, add.y),
          level: 6,
        });

        setMap(mapInstance);
      }
    }
  }, [currentAddress]);

  useEffect(() => {
    if (map) {
      const markers = GwangjuAdd.positions.map(function (position, i) {
        const maks = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(position.x, position.y)
        });

        if (position.dong === inputMap) {
          maks.setImage(new kakao.maps.MarkerImage(
            redMarkerImageURL,
            new kakao.maps.Size(30, 50)
          ));
        }
  
        const markergu = position.gu;
        const markerdong = position.dong;
        const markercode = position.code;
        const miraePrice = FuturePrice[reverseData[markercode]]

        // Reverse mapping을 활용하여 key 찾아오기
        const infowindow = new kakao.maps.InfoWindow({
          content: `
            <div style="${infoWindowStyle}">
              <p style="${titleStyle}; text-align: center;">${markergu} ${markerdong}</p>
              <p style="${priceStyle}" id="infoPrice">예측시세(만원): ${miraePrice}</p>
            </div>`,
          removable: true
        });
  
        kakao.maps.event.addListener(maks, 'click', function () {
          if (infoWindow) {
            infoWindow.close();
          }
          infowindow.open(map, maks);
          setInfoWindow(infowindow);
          dongPrice.pop(markergu, markerdong, markercode);
          setPriceArea(reverseData[markercode]);
          
  
          const originalKey = reverseData[markercode];
          if (originalKey !== undefined) {
            setCollectPrice(originalKey);
            // 인포윈도우 내부의 가격 정보 업데이트
            const infoPriceElement = document.getElementById('infoPrice');
            if (infoPriceElement) {
              infoPriceElement.textContent = `예측시세(만원): ${originalKey ? reverseData[markercode].year1 : null}`;
            }
          } else {
            console.log('맞지 않는 키:', markercode);
          }
          infowindow.setZIndex(1);
        });
  
        return maks;
      });
  
      const clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 10
      });
  
      clusterer.addMarkers(markers);
    }
  }, [map, infoWindow, reverseData, currentAddress]);
  
  useEffect(() => {
    // 프롭스로 받아온 inputMap 값이 변경되면 현재 주소 상태 업데이트
    setCurrentAddress(inputMap);
  }, [inputMap]);


  return (
    <div style={{ width: '695px', height: '810px' }}>
      <div id="map" style={{ width: '800px', height: '100%' }}></div>
    </div>
  );
};

export default Map;
