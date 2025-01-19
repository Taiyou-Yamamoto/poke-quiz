/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect, useState } from 'react';
import Input from './Input';
import { useRouter } from 'next/navigation';
import Isloading from './Isloading';
import Score from './Score';
import { postScore } from '@/app/utils/axiosHandle';
import QuizStatus from './QuizStatus';
import RetryAndHome from './RetryAndHome';
import QuizOne from './QuizOne';
import QuizTwo from './QuizTwo';
import QuizThree from './QuizThree';
import { QuizMainProps } from '@/app/utils/type';
import QuizOneResultTable from './QuizOneResultTable';
import QuizTwoResultTable from './QuizTwoResultTable';
import QuizThreeResultTable from './QuizThreeResultTable';
import QuizStartScreen from './QuizStartScreen';

const QuizMain = ({ quizArray, quiz_id }: QuizMainProps) => {
  const router = useRouter();
  const [second, setSecond] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [calculatedScore, setCalculatedScore] = useState<number>(0);
  const [yourResult, setYourResult] = useState<string[]>([]);
  const [quizStart, setQuizStart] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const oneMore = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setScore(0);
    setCount(0);
    setSecond(10);
    setYourResult([]);
    setQuizStart(true);
    router.replace(`/quiz${quiz_id}`);
  };

  const goToHome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/');
    router.refresh();
  };

  // resultのメッセージ
  let resultMessage;
  if (calculatedScore > 7000) {
    resultMessage = <div>すごいぞ！君はオーキド博士級だ！</div>;
  } else if (calculatedScore > 4000) {
    resultMessage = <div>やったね！君はエリートトレーナー級だ！</div>;
  } else {
    resultMessage = <div>がんばれ！君は虫取り少年級だ！</div>;
  }

  // resultの演出音の設定
  useEffect(() => {
    if (!quizStart && (count > 9 || second <= 0)) {
      const resultUrl = calculatedScore > 4000 ? '/result_high' : '/result_low';

      // 検索パラメータを変更しBGMを変更
      window.history.replaceState(null, '', resultUrl);

      // laravelでスコアを登録するAPIを叩く
      postScore(calculatedScore, quiz_id);
    }
  }, [quizStart, count, second]);

  // quizArrayが更新されたらloadingを解除,secondを10に戻し再スタート
  useEffect(() => {
    if (Array.isArray(quizArray) && quizArray.length > 0) {
      console.log('quizArray', quizArray);
      setIsLoading(false);
      setSecond(10);
    } else {
      console.error('quizArray 更新が検知されませんでした');
    }
  }, [quizArray]);

  // カウントダウン制御
  useEffect(() => {
    if (quizStart || isLoading || count >= 10) return;
    const countdown = () => {
      setSecond((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    };

    const AnswerTime = setInterval(countdown, 1000);

    return () => clearInterval(AnswerTime);
  }, [isLoading, quizStart]);

  return (
    <div
      className={
        isLoading
          ? 'bg-white  min-h-screen w-screen font-DotJP flex justify-center items-center'
          : 'bg-red-300  min-h-screen w-screen font-DotJP'
      }
    >
      {isLoading ? (
        <Isloading />
      ) : quizStart ? (
        <QuizStartScreen setQuizStart={setQuizStart} quiz_id={quiz_id} />
      ) : count > 9 || second <= 0 ? (
        <>
          <div className='h-full w-full flex flex-col justify-center items-center bg-red-300 py-11'>
            <Score
              score={score}
              second={second}
              calculatedScore={calculatedScore}
              setCalculatedScore={setCalculatedScore}
            />

            <div className='text-3xl text-white font-extrabold gray-shadow'>
              {resultMessage}
            </div>

            {/* テーブル */}
            {quiz_id === 1 ? (
              <QuizOneResultTable
                quizArray={quizArray}
                yourResult={yourResult}
              />
            ) : quiz_id === 2 ? (
              <QuizTwoResultTable
                quizArray={quizArray}
                yourResult={yourResult}
              />
            ) : (
              <QuizThreeResultTable
                quizArray={quizArray}
                yourResult={yourResult}
              />
            )}

            <RetryAndHome
              oneMore={oneMore}
              goToHome={goToHome}
              calculatedScore={calculatedScore}
            />
          </div>
        </>
      ) : (
        <div className=' min-h-screen w-full flex flex-col justify-center items-center'>
          {/* あとで背景として使う */}
          {/* <video
            autoPlay
            muted
            loop
            className='absolute inset-0 w-full h-full object-cover'
          >
            <source src='/background/モンスターボール風.mp4' type='video/mp4' />
          </video> */}

          <QuizStatus second={second} count={count} quiz_id={quiz_id} />

          {quiz_id === 1 ? (
            <QuizOne image={quizArray[count].image} />
          ) : quiz_id === 2 ? (
            <QuizTwo cry={quizArray[count].cry ?? ''} />
          ) : (
            <QuizThree text={quizArray[count].text ?? ''} />
          )}
          <Input
            PokemonName={quizArray[count].name}
            setCount={setCount}
            setScore={setScore}
            setYourResult={setYourResult}
          />
        </div>
      )}
    </div>
  );
};

export default QuizMain;
