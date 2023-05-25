import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../imgs/main-logo.png';

function ResultPage1(): JSX.Element {
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
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211026_160%2F1635174769023vaquq_JPEG%2FXtvERxcknYiyv4q_0VzLzbdh.jpeg.jpg"
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
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211026_261%2F1635174731828GoNsY_JPEG%2F3Gg_x8JvfI9POppwpp60tGgi.jpeg.jpg"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MTlfMTU2%2FMDAxNjg0NDY4Njg2NTU5.3PSG6U_uFv3znCQzQ5Z5iSK7I7zyEdbTM3AIuuJRqecg.bVCCp2iW3mp29k1gOx2qJOQbbVlVSCzthSEZyq27Y3Ig.JPEG.hwenc1%2FKakaoTalk_20230519_124945823_20.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MTlfMTky%2FMDAxNjg0NDg1NjE0NDQ1.kr_U-Ii1AHg0jcdFOzvx6cFX_cXCyb2uJ_2J6q7FsWQg.qaUPw54C3eCuLtVJjsMbIiy744tMqQ9o43taOhBnhswg.JPEG.sajh2%2FKakaoTalk_20230501_161947355_07.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211026_161%2F1635214714704D5klv_JPEG%2F03iovstKXm2H03spaww1TkJE.jpeg.jpg"
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
            <div className="text-fontColor font-black text-2xl">대화 식당!</div>
          </div>
          <div className="pt-10">
            &nbsp;푸짐한 가정식 보리밥 정식이 인기인 식당입니다. 포항 죽도시장
            안에 위치하고 있는 소박한 느낌의 식당인데요, 고등어 구이와 각종
            나물반찬, 된장찌개 등으로 구성된 백반은 밥을 한 그릇 더 청하는
            손님들이 많을 정도로 인기 있습니다. 식당 앞에서는 김밥도 판매하고
            있는데 찾아주시는 손님들께서 '마약김밥'이라고 이름 지어주셨습니다.
            영업 시간은 오전6시부터 오후4시(마지막 주문)까지 이며, 일요일은
            휴무입니다.
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

export default ResultPage1;
