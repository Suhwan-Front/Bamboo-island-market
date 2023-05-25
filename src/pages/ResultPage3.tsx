import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../imgs/main-logo.png';

function ResultPage3(): JSX.Element {
  return (
    <>
      <div className="bg-mainColor bg-cover h-screen">
        <div className="p-10">
          <Link to="/">
            <img src={Logo} className="w-30 h-20" />
          </Link>
          <div className="container mx-auto pt-5 lg:px-32 lg:pt-24">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210914_157%2F1631592312104MMWl6_JPEG%2FuNCE6ufgJbGT2cdEPYL2tzsn.JPG.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210914_91%2F1631592310303Ihj68_JPEG%2FtSExF-LbQmnNV3A0FYW1Z9hC.JPG.jpg"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210914_55%2F1631592310981iFops_JPEG%2F6NrIjkLQNaXMVDYQb_pMfPEy.JPG.jpg"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MDFfMTEg%2FMDAxNjgyOTE0MzA4MTU3.WKCLEoEBy5HoOKoH7ocwvmSRuztddBlYGJB5qLoveWAg.LqdXcK3BlAseAYOtyFy5W2pA-CBodPXLrR4_baXsE-Yg.JPEG.gsh8099%2F20190601_143855.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210914_141%2F1631592312492SBFBQ_JPEG%2FrxY-RlVaT65XH0y5lsRBQNqg.JPG.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200102_85%2F1577968914685LsM3s_JPEG%2FFOQ_z2fxxQ994pAgZxp-QL2Q.JPG.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <div className="text-buttonColor text-2xl">
              당신에게 추천 메뉴는
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-fontColor font-black text-2xl">
              삼형제횟집!
            </div>
          </div>
          <div className="pt-10">
            &nbsp;안녕하세요 최근 인기있는 방송 프로그램 주간 아이돌 mc 조세호도
            방문 했던 포항 죽도시장 맛집 삼형제횟집에 오신것을 환영합니다. 늘
            정직하게 운영하고 신선한 재료로 정성을 다하겠습니다. 저희
            삼형제횟집은 경상북도 포항시 북구 죽도시장내에 위치하고
            있습니다.(죽도시장길 37번지 ) 포항 죽도시장 맛집 삼형제횟집은 최고가
            되기 위해서 항상 최선을 다하며 찾아주시는 고객님들을 밝은 미소로
            맞이하여 친절함으로 더 가까이 다가가고 있습니다. 저렴한 가격/ 편안한
            분위기로 죽도시장 대게, 죽도시장 물회 로 유명한 삼형제횟집만의 깊고
            풍부한 맛을 직접 오셔서 꼭 느껴보시기 바랍니다. 감사합니다.
          </div>
          <div className="flex justify-between">
            <Link to="/mapPage">
              <button className="border-buttonColor bg-white mt-5 border-t-2 border-l-2 border-r-2 border-b-4 rounded-2xl h-12 w-36 font-black text-2xl text-slate-700 hover:bg-buttonColor hover:text-white">
                지도확인
              </button>
            </Link>
            <Link to="/foodTest">
              <button className="border-buttonColor bg-white mt-5 border-t-2 border-l-2 border-r-2 border-b-4 rounded-2xl h-12 w-36 font-black text-2xl text-slate-700 hover:bg-buttonColor hover:text-white">
                다시하기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPage3;
