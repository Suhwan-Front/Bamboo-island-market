import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../imgs/main-logo.png';

function ResultPage3(): JSX.Element {
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
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220510_257%2F1652159330099rWpFJ_JPEG%2FKakaoTalk_Photo_2022-05-10-14-06-42_012.jpeg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220510_277%2F1652159123659Q3UVk_JPEG%2FKakaoTalk_Photo_2022-05-09-13-52-38_015.jpeg"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA1MDhfMjUy%2FMDAxNjgzNTE4ODg4OTMz.OXVRlF7AwnJ91FaTjk3ic-NuKHE9xTp6QPY5JRzBhvIg.nemc4E1GNEOuIyFFgAM0Qu-Ab60wqzgBTpnVD0qGb_og.JPEG%2FIMG_6384.jpeg"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA0MjFfMTQw%2FMDAxNjgyMDAzMTYyMTgz.kBDiCEdutMvKt94KZu9lAR35Na39vbkmvDajgT5H7CMg.JA_LmeEx7DUfjTaC4vkIXKKAekIGApE-VTIuagQCAD0g.JPEG%2F20230420_140105.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjdfMjEg%2FMDAxNjc5ODk3MzM3MDMz.pam8__4m-R3PbhVFkRccOEX5aMjaoll-PS4PDYmBaPUg.5KLsV0I9GO9akE7qkAu6QMNqMi5NZIzfDyfS8-y5OKEg.JPEG.thfdlv2777%2F006_%25286%2529.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MTRfMjg3%2FMDAxNjgxNDM1OTQzNTI4.bnmHgGgbhe_OhJScJ0TwaE-MZj-uszcOht0iuE-ABDQg.tiLgK1sXD4a6AVaNg73POykoGIP7UJcHmqwQd3Hp8c8g.JPEG.sdf1997%2F%25C6%25F7%25C7%25D7_%25C1%25D7%25B5%25B5%25BC%25D2%25B3%25E2_%25B4%25EB%25C7%25A5%25BB%25E7%25C1%25F8.jpg"
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
            <div className="text-fontColor font-black text-2xl">죽도소년!</div>
          </div>
          <div className="pt-10">
            &nbsp;2011년 부터 함께 하는 단골들이 그려 준 수많은 그림들, 남친과
            헤어지고 사귈때 받았던 물건들을 걸어 둔 전남친 무덤이 있고. 직접
            로스팅 한 핸드드립 이나 인기 만점인 밀크티를 드신다면 40년 넘게
            포항에 살아 현지인의 신선한 회 같은 관광정보를 안내 받을 수
            있습니다.( 비 추천 메뉴도 있습니다.) 포항의 풍경이 아닌 포항의
            사람으로 기억되는 여행을 원하시면 한번 방문해 주세요.
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

export default ResultPage3;
