import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../imgs/main-logo.png';

function ResultPage(): JSX.Element {
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
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180326_39%2F1522023401699YD98v_JPEG%2F923IOBrO7bASz1NqpFVt_fWF.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180326_286%2F1522023402203slBgS_JPEG%2F-oQkoMOl9KIdIEzZQhD_jlGe.jpg"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180326_127%2F1522023397199oITiQ_JPEG%2FuzYV_UH3oQ82ZPKOnsglcaAF.jpg"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA1MjJfMTMz%2FMDAxNjg0NzMzMjI0NDQ2.wdKEBisVViXmtdEadrtpewc37lO5cswVzjGbMmsKh14g.rVodNWLVfrK3gDLRCPvKn4r8gCICamxf2p7-Xr9AeUcg.JPEG%2F20230520_161139.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA1MjBfMTg1%2FMDAxNjg0NTc0MTI3Mzk4.h-DJk6uKYylXq5HxYu5gbBft2ngGtkWj6L5IQqrXApEg.j-uZZ3wT2XlNT8gWr_lTpLcFPpYWHI9bypjcH8MLR0Ug.JPEG%2F2023-05-20-16-11-05-757.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA1MjJfMTUg%2FMDAxNjg0NzE2NDM0NTIy.sNyWYziND21nCfNxZxeVgRlZ3Y56nkWyvgPrY0i4Awog.S1edipBlZ_Pi8GhVr04vG8EIHmu1VLWD-thcZX8p04wg.JPEG%2FIMG_5505.jpeg"
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
            <div className="text-fontColor font-black text-2xl">장기 식당!</div>
          </div>
          <div className="pt-10">
            &nbsp;수요미식회, 슈퍼맨이 돌아왔다, 밤도깨비에 방영된 포항 죽도시장
            내에 있는 3대째 이어오는 65년 전통의 곰탕 맛집 입니다. 곰탕과 수육에
            사용되는 고기는 한우 소머리로, 부드럽고 야들야들한 식감을 느낄 수
            있다. 곰탕의 국물이 진한 편이며, 양도 푸짐하다. 백년가게는 30년 이상
            명맥을 유지하면서도 오래도록 고객의 꾸준한 사랑을 받아온 점포
            가운데, 중소벤처기업부에서 그 우수성과 성장 가능성을 높게 평가 받아
            공식 인증받은 점포입니다.
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

export default ResultPage;
