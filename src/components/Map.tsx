import React, {useState} from 'react';
import {GoogleMap, InfoBoxF, LoadScript, MarkerF} from '@react-google-maps/api';
import HotSoup from '../imgs/hot-soup.png';
import Rice from '../imgs/rice.png';
import Meat from '../imgs/soy-meat.png';
import RiceRoll from '../imgs/sushi.png';
import Porridge from '../imgs/porridge.png';

const center = {
  lat: 36.035151,
  lng: 129.367786,
};

const containerStyle: React.CSSProperties = {
  width: '20rem',
  height: '25rem',
};

const markerStyle = [
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{visiblity: 'off'}],
  },
];

function Map(): JSX.Element {
  const [marker1, setMarker1] = useState(false);
  const [marker2, setMarker2] = useState(false);
  const [marker3, setMarker3] = useState(false);
  const [marker4, setMarker4] = useState(false);
  const [marker5, setMarker5] = useState(false);

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyAztXc4J5mZGY0T2nIcAjV63cqEg3lgfGs">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16.3}
          options={{disableDefaultUI: true, styles: markerStyle}}
        >
          <MarkerF
            position={{lat: 36.035807, lng: 129.36565}}
            icon={{
              url: HotSoup,
              scaledSize: {width: 40, height: 40},
            }}
            onClick={() => setMarker1(true)}
          >
            {marker1 === true ? (
              <InfoBoxF onCloseClick={() => setMarker1(false)}>
                <div className="font-bold">장기 식당</div>
              </InfoBoxF>
            ) : null}
          </MarkerF>
          <MarkerF
            position={{lat: 36.035723, lng: 129.368189}}
            icon={{
              url: Rice,
              scaledSize: {width: 35, height: 35},
            }}
            onClick={() => setMarker2(true)}
          >
            {marker2 === true ? (
              <InfoBoxF onCloseClick={() => setMarker2(false)}>
                <div className="font-bold">대화식당</div>
              </InfoBoxF>
            ) : null}
          </MarkerF>
          <MarkerF
            position={{lat: 36.035375, lng: 129.367943}}
            icon={{
              url: Meat,
              scaledSize: {width: 35, height: 35},
            }}
            onClick={() => setMarker3(true)}
          >
            {marker3 === true ? (
              <InfoBoxF onCloseClick={() => setMarker3(false)}>
                <div className="font-bold">용철이 떡갈비</div>
              </InfoBoxF>
            ) : null}
          </MarkerF>
          <MarkerF
            position={{lat: 36.035002, lng: 129.367557}}
            icon={{
              url: RiceRoll,
              scaledSize: {width: 35, height: 35},
            }}
            onClick={() => setMarker4(true)}
          >
            {marker4 === true ? (
              <InfoBoxF onCloseClick={() => setMarker4(false)}>
                <div className="font-bold">엄마손김밥</div>
              </InfoBoxF>
            ) : null}
          </MarkerF>
          <MarkerF
            position={{lat: 36.034791, lng: 129.369496}}
            icon={{
              url: Porridge,
              scaledSize: {width: 35, height: 35},
            }}
            onClick={() => setMarker5(true)}
          >
            {marker5 === true ? (
              <InfoBoxF onCloseClick={() => setMarker5(false)}>
                <div className="font-bold">유화초전복죽</div>
              </InfoBoxF>
            ) : null}
          </MarkerF>
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default Map;
