import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../imgs/main-logo.png';
import question1Image from '../imgs/question_icons/rice_several.jpg';
import question2Image from '../imgs/question_icons/prefer_fish.jpg';
import question3Image from '../imgs/question_icons/change_menu.jpg';
import question4Image from '../imgs/question_icons/traditional_food.jpg';
import question5Image from '../imgs/question_icons/SNS_feel.jpg';
import question6Image from '../imgs/question_icons/new_food.jpg';
import question7Image from '../imgs/question_icons/snack.jpg';

function FoodTest(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const totalQuestions = 7;
  const [checker1, setChecker1] = useState(0);
  const [checker2, setChecker2] = useState(0);
  const [checker3, setChecker3] = useState(0);
  const [checker4, setChecker4] = useState(0);
  const [checker5, setChecker5] = useState(0);
  const [checker6, setChecker6] = useState(0);
  const [checker7, setChecker7] = useState(0);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const selectChecker1 = () => {
    return (
      <div className="flex justify-evenly pt-10 pb-10">
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker1(1)}
          style={{
            backgroundColor: checker1 === 1 ? '#7895B2' : undefined,
          }}
        >
          예
        </button>
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker1(2)}
          style={{
            backgroundColor: checker1 === 2 ? '#7895B2' : undefined,
          }}
        >
          아니요
        </button>
      </div>
    );
  };

  const selectChecker2 = () => {
    return (
      <div className="flex justify-evenly pt-10 pb-10">
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker2(1)}
          style={{
            backgroundColor: checker2 === 1 ? '#7895B2' : undefined,
          }}
        >
          예
        </button>
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker2(2)}
          style={{
            backgroundColor: checker2 === 2 ? '#7895B2' : undefined,
          }}
        >
          아니요
        </button>
      </div>
    );
  };

  const selectChecker3 = () => {
    return (
      <div className="flex justify-evenly pt-10 pb-10">
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker3(1)}
          style={{
            backgroundColor: checker3 === 1 ? '#7895B2' : undefined,
          }}
        >
          예
        </button>
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker3(2)}
          style={{
            backgroundColor: checker3 === 2 ? '#7895B2' : undefined,
          }}
        >
          아니요
        </button>
      </div>
    );
  };

  const selectChecker4 = () => {
    return (
      <div className="flex justify-evenly pt-10 pb-10">
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker4(1)}
          style={{
            backgroundColor: checker4 === 1 ? '#7895B2' : undefined,
          }}
        >
          예
        </button>
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker4(2)}
          style={{
            backgroundColor: checker4 === 2 ? '#7895B2' : undefined,
          }}
        >
          아니요
        </button>
      </div>
    );
  };

  const selectChecker5 = () => {
    return (
      <div className="flex justify-evenly pt-10 pb-10">
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker5(1)}
          style={{
            backgroundColor: checker5 === 1 ? '#7895B2' : undefined,
          }}
        >
          예
        </button>
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker5(2)}
          style={{
            backgroundColor: checker5 === 2 ? '#7895B2' : undefined,
          }}
        >
          아니요
        </button>
      </div>
    );
  };

  const selectChecker6 = () => {
    return (
      <div className="flex justify-evenly pt-10 pb-10">
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker6(1)}
          style={{
            backgroundColor: checker6 === 1 ? '#7895B2' : undefined,
          }}
        >
          예
        </button>
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker6(2)}
          style={{
            backgroundColor: checker6 === 2 ? '#7895B2' : undefined,
          }}
        >
          아니요
        </button>
      </div>
    );
  };

  const selectChecker7 = () => {
    return (
      <div className="flex justify-evenly pt-10 pb-10">
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker7(1)}
          style={{
            backgroundColor: checker7 === 1 ? '#7895B2' : undefined,
          }}
        >
          예
        </button>
        <button
          className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
          onClick={() => setChecker7(2)}
          style={{
            backgroundColor: checker7 === 2 ? '#7895B2' : undefined,
          }}
        >
          아니요
        </button>
      </div>
    );
  };

  const renderQuestionsForPage = () => {
    const startQuestionIndex = currentPage - 1;
    const endQuestionIndex = startQuestionIndex + 1;

    const Questions = [
      {
        id: 1,
        text: '나는 평소 밥을 조금씩 자주 먹는다는 소리를 자주 듣는다.',
        image: question1Image,
        button: selectChecker1(),
      },
      {
        id: 2,
        text: '나는 육류보다 어류를 더 좋아한다.',
        image: question2Image,
        button: selectChecker2(),
      },
      {
        id: 3,
        text: '좋아하는 음식이나 메뉴가 항상 바뀐다.',
        image: question3Image,
        button: selectChecker3(),
      },
      {
        id: 4,
        text: '전통식 디자인을 한 감성있는 음식점을 선호한다.',
        image: question4Image,
        button: selectChecker4(),
      },
      {
        id: 5,
        text: 'SNS 업로드를 위해 사진 찍는 감성을 중요시한다.',
        image: question5Image,
        button: selectChecker5(),
      },
      {
        id: 6,
        text: '다른 사람들이 모르는 새로운 맛을 추구한다.',
        image: question6Image,
        button: selectChecker6(),
      },
      {
        id: 7,
        text: '밥보다는 간식으로 배를 채운다.',
        image: question7Image,
        button: selectChecker7(),
      },
    ];

    return Questions.slice(startQuestionIndex, endQuestionIndex).map(
      question => (
        <div>
          <div className="py-10">
            <img src={question.image} />
          </div>
          <div className="flex justify-center">
            <div className="bg-subColor border-subColor rounded-2xl border-personal text-center max-w-xs">
              <div
                key={question.id}
                className="text-xl font-black text-fontColor"
              >
                {question.text}
              </div>
            </div>
          </div>
          {question.button}
        </div>
      ),
    );
  };
  return (
    <>
      <div className="bg-mainColor bg-cover h-screen p-10">
        <Link to="/">
          <img src={Logo} className="w-30 h-20" />
        </Link>
        {renderQuestionsForPage()}
        <div className="flex justify-center">
          {currentPage === 1 ? (
            <></>
          ) : (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="text-fontColor pr-3"
            >
              이전
            </button>
          )}

          {Array.from(Array(totalQuestions).keys()).map(index => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              style={{
                fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
              }}
              className="text-fontColor p-1"
            >
              {index + 1}
            </button>
          ))}
          {currentPage === totalQuestions ? (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalQuestions}
              className="text-fontColor pl-3"
            >
              결과보기
            </button>
          ) : (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalQuestions}
              className="text-fontColor pl-3"
            >
              다음
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default FoodTest;
