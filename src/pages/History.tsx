import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../imgs/main-logo.png';

const History: React.FC = () => {
  return (
    <div className="bg-mainColor">
      <div className="bg-mainColor bg-cover h-screen p-10">
        <Link to="/">
          <img src={Logo} className="w-30 h-20" />
        </Link>
        <div className="pt-5">
          <img src="https://www.kyongbuk.co.kr/news/photo/201903/1057014_339854_3933.jpg" />
        </div>
        <div className="flex justify-center pt-5">
          <div className="text-fontColor font-black text-2xl">
            세 개의 시장이 모인
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-fontColor font-black text-2xl">죽도시장!</div>
        </div>
        <div className="pt-5">
          죽도시장은 본래 죽도시장, 죽도어시장, 죽도농산물시장 등이 합쳐져
          조성된 것으로 각 시장의 운영 주체는 서로 분리되어 있다. 이중 가장 많은
          사람들이 방문하는 곳은 죽도어시장이다. 죽도어시장은 대구를 비롯하여
          경상북도에 수산물을 공급하고 있어 동해안에서 최대 규모를 자랑하며,
          과메기, 돌문어, 대게, 물회 등이 유명하다. 또한 수산물을 판매하는
          곳에는 횟집 200여 개가 밀집되어 있어 저렴한 가격으로 싱싱한 회를 맛볼
          수 있다.
        </div>
        <div className="flex justify-center">
          <Link to="/foodTest">
            <button className="border-buttonColor bg-white mt-10 border-t-2 border-l-2 border-r-2 border-b-4 rounded-2xl h-12 w-72 font-black text-2xl text-slate-700 hover:bg-buttonColor hover:text-white">
              테스트 시작!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History;
