import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../imgs/main-logo.png';
import Map from '../components/Map';

function MapPage(): JSX.Element {
  return (
    <div className="bg-mainColor">
      <div className="bg-mainColor bg-cover h-screen p-10">
        <Link to="/">
          <img src={Logo} className="w-30 h-20" />
        </Link>
        <div className="flex justify-center pt-10">
          <Map />
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <button className="border-buttonColor bg-white mt-5 border-t-2 border-l-2 border-r-2 border-b-4 rounded-2xl h-12 w-36 font-black text-2xl text-slate-700 hover:bg-buttonColor hover:text-white">
              메인으로
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/history">
            <button className="border-buttonColor bg-white mt-5 border-t-2 border-l-2 border-r-2 border-b-4 rounded-2xl h-12 w-72 font-black text-2xl text-slate-700 hover:bg-buttonColor hover:text-white">
              나와 맞는 음식 테스트
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MapPage;
