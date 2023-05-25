import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../imgs/main-logo.png';

function Main(): JSX.Element {
  return (
    <>
      <div className="bg-mainColor bg-cover h-screen">
        <div className="flex justify-center pt-40">
          <img className="h-40 w-56" src={Logo} />
        </div>
        <div className="flex justify-center">
          <Link to="/history">
            <button className="border-buttonColor bg-white mt-40 border-t-2 border-l-2 border-r-2 border-b-4 rounded-2xl h-12 w-72 font-black text-2xl text-slate-700 hover:bg-buttonColor hover:text-white">
              나와 맞는 음식 테스트
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/mapPage">
            <button className="border-buttonColor bg-white mt-5 border-t-2 border-l-2 border-r-2 border-b-4 rounded-2xl h-12 w-36 font-black text-2xl text-slate-700 hover:bg-buttonColor hover:text-white">
              지도 보기
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;
