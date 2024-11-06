'use client';
import React, { useEffect, useState } from 'react';
import QuizImage from './QuizImage';
import Input from './Input';
import { quizArrayProps } from '@/app/type';
import { useRouter } from 'next/navigation';

const QuizMain = ({ quizArray, detailArray }: quizArrayProps) => {
  const router = useRouter();
  const [count, setCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const goToHome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setScore(0);
    setCount(0);
    router.push('/');
    router.refresh();
  };

  useEffect(() => {
    if (count > 9) {
      const resultUrl = score > 7 ? '/result_high' : '/result_low';
      // 検索パラメータを変更しBGMを変更
      window.history.replaceState(null, '', resultUrl);
      window.history.replaceState(null, '', resultUrl);
    }
  }, [count]);
  console.log('クイズ', quizArray);
  console.log('詳細', detailArray);
  return (
    <div className='bg-red-300 min-h-screen w-full'>
      {count > 9 ? (
        <div className='h-full w-full flex flex-col justify-center items-center mt-10 bg-red-300'>
          <h1 className='font-PokeGB text-3xl text-white font-extrabold gray-shadow'>
            {score}/10
          </h1>
          <div></div>
          <form onSubmit={goToHome} className=''>
            <button
              type='submit'
              className='bg-yellow-300 gray-shadow return-button max-w-[150px] font-extrabold font-PokeGB text-white py-2 px-4 rounded-md border-solid border-4 mt-4 ring-4 shadow-2xl active:shadow-none'
            >
              戻る
            </button>
          </form>
        </div>
      ) : (
        <div className='bg-red-300 min-h-screen w-full flex flex-col justify-center items-center'>
          <div>
            <h1 className='font-PokeGB text-3xl text-white font-extrabold gray-shadow items-center'>
              {count + 1}/10
            </h1>
            <h2 className='font-PokeGB text-3xl text-white font-extrabold my-14 gray-shadow'>
              このポケモンの名前は？
            </h2>
          </div>

          <QuizImage image={quizArray[count].image} />
          <Input
            PokemonName={quizArray[count].name}
            setCount={setCount}
            setScore={setScore}
          />
        </div>
      )}
    </div>
  );
};

export default QuizMain;
