import React, { useEffect, useState , useContext} from 'react'
import GwangjuAdd from './dong positions.json'
import MiraePrice from './data.json'
import { AddrContext } from '../Contexts/AddrContext'
import FuturePrice from './result2.json'

const { kakao } = window;

const Map = ({ address }) => {
  const mapAdd = address;
  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(false);
  const { setPriceArea } = useContext(AddrContext);
  const [collectPrice, setCollectPrice] = useState()
  const dongPrice = [];
  const miraecodes = MiraePrice.codes

  // Reverse mapping 생성
  const reverseMapping = {};
  for (const key in miraecodes) {
    const value = miraecodes[key];
    reverseMapping[value] = key;
  }

  const reverseData = {};
  for (const key in miraecodes) {
    const value = miraecodes[key];
    reverseData[value] = key;
  }

  //인포윈도우 스타일
  const infoWindowStyle = {
    backgroundColor: 'plum',
    borderRadius: '5px',
    padding: '10px',
    width: '200px'
  };

  const titleStyle = {
    margin: '0',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  const priceStyle = {
    margin: '5px 0'
  };

  const add = GwangjuAdd.positions.find((add) => add.dong === mapAdd);

  useEffect(() => {
    if (add) {
      const mapInstance = new kakao.maps.Map(document.getElementById('map'), {
        center: new kakao.maps.LatLng(add.x, add.y),
        level: 6
      });
      
      setMap(mapInstance);
    }
  }, [add]);

  useEffect(() => {
    if (map) {
      const markers = GwangjuAdd.positions.map(function (position, i) {
        const maks = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(position.x, position.y)
        });
  
        const markergu = position.gu;
        const markerdong = position.dong;
        const markercode = position.code;
        const miraePrice = FuturePrice[reverseData[markercode]]

        // Reverse mapping을 활용하여 key 찾아오기
        const infowindow = new kakao.maps.InfoWindow({
          content: `
            <div style="${infoWindowStyle}">
              <p style="${titleStyle}">${markergu} ${markerdong}</p>
              <p style="${priceStyle}" id="infoPrice">예측시세: ${miraePrice}</p>
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
          setPriceArea(markerdong);
  
          const originalKey = reverseData[markercode];
          if (originalKey !== undefined) {
            setCollectPrice(originalKey);
            // 인포윈도우 내부의 가격 정보 업데이트
            const infoPriceElement = document.getElementById('infoPrice');
            if (infoPriceElement) {
              infoPriceElement.textContent = `1년 후 예측시세(만원): ${originalKey ? FuturePrice[originalKey].year1 : null}`;
            }
          } else {
            console.log('맞지 않는 키:', markercode);
          }
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
  }, [map, infoWindow, reverseData]);
  


  return (
    <div style={{ width: '700px', height: '800px' }}>
      <div id="map" style={{ width: '700px', height: '100%' }}></div>
    </div>
  );
};

export default Map;
