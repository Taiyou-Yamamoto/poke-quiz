'use client';
import React, { useEffect, useState } from 'react';
import QuizImage from './QuizImage';
import Input from './Input';
import { Quiz, quizArrayProps } from '@/app/type';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import XPost from './XPost';
import Isloading from './Isloading';

const QuizMain = ({ quizArray, detailArray }: quizArrayProps) => {
  const router = useRouter();
  const [second, setSecond] = useState<number>(50);
  const [count, setCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [yourResult, setYourResult] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const oneMore = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setScore(0);
    setCount(0);
    router.push('/quiz');
    router.refresh();
  };
  const goToHome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setScore(0);
    setCount(0);
    router.push('/');
    router.refresh();
  };

  let resultMessage;
  if (score > 8) {
    resultMessage = <div>すごいぞ！君はオーキド博士級だ！</div>;
  } else if (score > 5) {
    resultMessage = <div>やったね！君はエリートトレーナー級だ！</div>;
  } else {
    resultMessage = <div>がんばれ！君は虫取り少年級だ！</div>;
  }

  useEffect(() => {
    if (count > 9 || second <= 0) {
      const resultUrl = score > 5 ? '/result_high' : '/result_low';
      // 検索パラメータを変更しBGMを変更
      window.history.replaceState(null, '', resultUrl);
    }
  }, [count, score, second]);

  // fetchが完了したら時間を50にしてloadingを解除
  useEffect(() => {
    if (Array.isArray(detailArray) && detailArray.length > 0) {
      setIsLoading(false);
      setSecond(50);
    }
  }, [detailArray]);

  useEffect(() => {
    if (second <= 0) {
      return;
    }
    const countdown = () => {
      setSecond((prev) => prev - 1);
    };

    const AnswerTime = setInterval(countdown, 1000);
    console.log('answer', AnswerTime);
    console.log('second', second);

    // setIntervalをクリーンアップ
    return () => clearInterval(AnswerTime);
  }, [second]);

  console.log('クイズ', quizArray);
  console.log('詳細', detailArray);
  console.log('yourResult', yourResult);
  console.log('router', router);

  return (
    <div
      className={
        isLoading
          ? 'bg-white  w-full font-DotJP flex justify-center'
          : 'bg-red-300   w-full font-DotJP'
      }
    >
      <div className='py-11'>
        {isLoading ? (
          <Isloading />
        ) : count > 9 || second <= 0 ? (
          <div className=' w-full flex flex-col justify-center items-center bg-red-300'>
            <h1 className='font-PokeGB text-3xl text-white font-extrabold gray-shadow mb-11'>
              スコア: {score}/10
            </h1>
            <div className='text-3xl text-white font-extrabold gray-shadow'>
              {resultMessage}
            </div>
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
                {quizArray.map((pokemon: Quiz, index) => {
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

            <div className='flex flex-col relative'>
              <form onSubmit={oneMore}>
                <button
                  type='submit'
                  className='w-[10rem] my-5 bg-yellow-400 hover:bg-yellow-500 gray-shadow max-w-[150px] font-extrabold text-white py-2 px-4 rounded-md border-solid border-4 ring-4 hover:ring-blue-500 shadow-2xl hover:shadow-none transition-all duration-300'
                >
                  再挑戦する
                </button>
              </form>

              <form onSubmit={goToHome}>
                <button
                  type='submit'
                  className='w-[10rem] bg-yellow-400 hover:bg-yellow-500 gray-shadow max-w-[150px] font-extrabold text-white py-2 px-4 rounded-md border-solid border-4 ring-4 hover:ring-blue-500 shadow-2xl hover:shadow-none transition-all duration-300'
                >
                  ホームへ戻る
                </button>
              </form>
              <div className='absolute bottom-0 left-60'>
                <XPost />
              </div>
            </div>
          </div>
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
            <div className='h-[7rem] text-2xl text-white gray-shadow'>
              残り
              <span
                className={
                  second < 11 ? 'text-red-600 font-PokeGB' : 'font-PokeGB'
                }
              >
                {second}
              </span>
              秒
            </div>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <h1 className='flex font-PokeGB text-3xl text-white font-extrabold gray-shadow '>
                {count + 1}問目
              </h1>
              <h2 className='font-PokeHira text-3xl text-white  font-extrabold gray-shadow'>
                このポケモンの名前は？
              </h2>
            </div>

            <QuizImage image={quizArray[count].image} />
            <Input
              PokemonName={quizArray[count].name}
              setCount={setCount}
              setScore={setScore}
              setYourResult={setYourResult}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizMain;
