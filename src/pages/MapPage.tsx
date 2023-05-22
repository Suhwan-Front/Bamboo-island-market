import React from 'react';
import Map from '../components/Map';

function MapPage(): JSX.Element {
  return (
    <>
      <div className="bg-mainColor bg-cover h-screen">
        <div className="flex justify-center pt-40">
          <Map />
        </div>
      </div>
    </>
  );
}

export default MapPage;
