import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../imgs/main-logo.png';

function ResultPage2(): JSX.Element {
  return (
    <div className="bg-mainColor">
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
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150901_198%2F1441049260724xvUHI_JPEG%2F11830747_2.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150901_162%2F14410492608965YMOG_JPEG%2F11830747_3.jpg"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MjRfMjA5%2FMDAxNjgyMzI1MDIzNzIz.2eBelkUk6m2AHEiDaSk9gqmoXzLCC2flTt-YAHY9KVcg.3aiZVwBQtm732Aksr9HGjFSvN1uhcMMRoqsc7uwwddgg.JPEG.parkgv22%2FKakaoTalk_20230424_155315193_01.jpg"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150901_118%2F1441049261131txbhE_JPEG%2F11830747_4.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150901_223%2F1441049261327qhjvF_JPEG%2F11830747_5.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA0MjhfMjIx%2FMDAxNjgyNjQ2MDIxOTAx.NNby3QXlW5CglCjjvCRunTUXvcjUh0zlr_uAZPFQn7Yg.CvazI-zlM4svcwlIBjaSc575EPAPGHrhPtKXrPy2UTYg.JPEG%2F87F66C23-4BD4-4E5B-87A6-F49DE373F90F.jpeg"
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
              유화초전복죽!
            </div>
          </div>
          <div className="pt-10">
            &nbsp;맛도 만점, 영양도 만점입니다. 유화초전복죽에서는 다른
            전복죽에서 맛볼 수 없는 자연의 싱그러움과 고소한 맛을 느낄 수
            있습니다. 이곳 사장님은 자신의 이름을 내걸고 할 정도로 음식에 자신이
            있고 항상 내 자신과 내 가족이 먹는다는 생각 하나로 깔끔하고
            맛깔스럽게 손님들을 대접합니다. 해녀들이 직접 캐온 싱싱한 전복으로
            정성과 사랑을 가득 담아 요리를 하니 이 어찌 맛이 없을 수가
            있겠습니까. 또한, 이곳의 밑반찬도 별미입니다. 멍게 젓갈과 깻잎이
            밑반찬으로 나오는데 그 맛을 잊을 수가 없어 단골이 된 손님들도
            대다수입니다.
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
    </div>
  );
}

export default ResultPage2;
