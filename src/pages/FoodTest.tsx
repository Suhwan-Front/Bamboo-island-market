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

interface Question {
  id: number;
  text: string;
  image: string;
  checker: number;
}

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const FoodTest: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalQuestions = 7;
  const [checkers, setCheckers] = useState<number[]>(
    Array(totalQuestions).fill(0),
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const random = Math.floor(getRandom(0, 5));
  const handleRandomResult = () => {
    if (random === 0) {
      return <Link to="/resultPage">결과보기</Link>;
    }
    if (random === 1) {
      return <Link to="/resultPage2">결과보기</Link>;
    }
    if (random === 2) {
      return <Link to="/resultPage3">결과보기</Link>;
    }
    if (random === 3) {
      return <Link to="/resultPage4">결과보기</Link>;
    }
    return <Link to="/resultPage1">결과보기</Link>;
  };

  const selectChecker = (questionIndex: number, checkerIndex: number) => {
    setCheckers(prevCheckers => {
      const updatedCheckers = [...prevCheckers];
      updatedCheckers[questionIndex] = checkerIndex;
      return updatedCheckers;
    });
  };

  const renderQuestionsForPage = () => {
    const startQuestionIndex = currentPage - 1;
    const endQuestionIndex = startQuestionIndex + 1;

    const questions: Question[] = [
      {
        id: 1,
        text: '나는 평소 밥을 조금씩 자주 먹는다는 소리를 자주 듣는다.',
        image: question1Image,
        checker: checkers[0],
      },
      {
        id: 2,
        text: '나는 육류보다 어류를 더 좋아한다.',
        image: question2Image,
        checker: checkers[1],
      },
      {
        id: 3,
        text: '좋아하는 음식이나 메뉴가 항상 바뀐다.',
        image: question3Image,
        checker: checkers[2],
      },
      {
        id: 4,
        text: '전통식 디자인을 한 감성있는 음식점을 선호한다.',
        image: question4Image,
        checker: checkers[3],
      },
      {
        id: 5,
        text: 'SNS 업로드를 위해 사진 찍는 감성을 중요시한다.',
        image: question5Image,
        checker: checkers[4],
      },
      {
        id: 6,
        text: '다른 사람들이 모르는 새로운 맛을 추구한다.',
        image: question6Image,
        checker: checkers[5],
      },
      {
        id: 7,
        text: '밥보다는 간식으로 배를 채운다.',
        image: question7Image,
        checker: checkers[6],
      },
    ];

    return questions
      .slice(startQuestionIndex, endQuestionIndex)
      .map(question => (
        <div key={question.id}>
          <div className="py-10">
            <img src={question.image} alt={`Question ${question.id}`} />
          </div>
          <div className="flex justify-center">
            <div className="bg-subColor border-subColor rounded-2xl border-personal text-center max-w-xs">
              <div className="text-xl font-black text-fontColor">
                {question.text}
              </div>
            </div>
          </div>
          <div className="flex justify-evenly pt-10 pb-10">
            <button
              className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
              onClick={() => selectChecker(startQuestionIndex, 1)}
              style={{
                backgroundColor: question.checker === 1 ? '#7895B2' : undefined,
              }}
            >
              예
            </button>
            <button
              className="rounded-xl border-x-2 border-t-2 border-b-4 border-fontColor w-24"
              onClick={() => selectChecker(startQuestionIndex, 2)}
              style={{
                backgroundColor: question.checker === 2 ? '#7895B2' : undefined,
              }}
            >
              아니요
            </button>
          </div>
        </div>
      ));
  };

  return (
    <>
      <div className="bg-mainColor bg-cover h-screen p-10">
        <Link to="/">
          <img src={Logo} className="w-30 h-20" alt="Logo" />
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
              {handleRandomResult()}
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
};

export default FoodTest;
