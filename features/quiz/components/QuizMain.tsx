/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect, useState } from 'react';
import Input from './Input';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Isloading from './Isloading';
import Score from './Score';
import { postScore } from '@/app/utils/axiosHandle';
import QuizStatus from './QuizStatus';
import RetryAndHome from './RetryAndHome';
import QuizOne from './QuizOne';
import QuizTwo from './QuizTwo';
import QuizThree from './QuizThree';
import { Quiz1, QuizMainProps } from '@/app/utils/type';

const QuizMain = ({ quizArray, quiz_id }: QuizMainProps) => {
  const router = useRouter();
  const [second, setSecond] = useState<number>(60);
  const [count, setCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [calculatedScore, setCalculatedScore] = useState<number>(0);
  const [yourResult, setYourResult] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const oneMore = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setScore(0);
    setCount(0);
    setSecond(60);
    setYourResult([]);
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
    if (count > 9 || second <= 0) {
      const resultUrl = calculatedScore > 4000 ? '/result_high' : '/result_low';

      // 検索パラメータを変更しBGMを変更
      window.history.replaceState(null, '', resultUrl);

      // laravelでスコアを登録するAPIを叩く
      postScore(calculatedScore, quiz_id);
    }
  }, [count, second]);

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
    if (isLoading || count >= 10) return;
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
  }, [isLoading]);

  return (
    <div
      className={
        isLoading
          ? 'bg-white  min-h-screen w-full font-DotJP flex justify-center items-center'
          : 'bg-red-300  min-h-screen  w-full font-DotJP'
      }
    >
      {isLoading ? (
        <Isloading />
      ) : count > 9 || second <= 0 ? (
        <>
          <div className=' w-full flex flex-col justify-center items-center bg-red-300 py-11'>
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
            <table className='mt-10'>
              <thead>
                <tr>
                  <th colSpan={2} className='mr-10'>
                    答え
                  </th>
                  <th colSpan={2} className='ml-10'>
                    あなたの回答
                  </th>
                </tr>
              </thead>
              <tbody>
                {quizArray.map((pokemon: Quiz1, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <Image
                          src={pokemon.image}
                          width={80}
                          height={80}
                          key={pokemon.image}
                          alt={''}
                        />
                      </td>
                      <td>
                        <h3 className='mr-5 text-white gray-shadow font-extrabold text-2xl'>
                          {pokemon.name}
                        </h3>
                      </td>
                      <td>
                        <h3 className='min-w-36 text-white gray-shadow  font-extrabold text-2xl'>
                          {yourResult[index]}
                        </h3>
                      </td>
                      <td>
                        {' '}
                        {pokemon.name == yourResult[index] ? (
                          <FontAwesomeIcon
                            icon={faCircle}
                            className='text-lime-500 gray-shadow font-extrabold text-2xl'
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faXmark}
                            className='text-red-600 gray-shadow font-extrabold text-2xl'
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

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
