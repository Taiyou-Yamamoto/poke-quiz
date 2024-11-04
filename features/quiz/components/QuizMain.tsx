'use client';
import Battle from '@/app/utils/battle';
import React, { useState } from 'react';
import QuizImage from './QuizImage';
import Input from './Input';
import { quizArrayProps } from '@/app/type';
import { useRouter } from 'next/navigation';

const QuizMain = ({ quizArray }: quizArrayProps) => {
  const router = useRouter();
  const [count, setCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const goToHome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/');
    router.refresh();
  };
  return (
    <div className='bg-red-300 min-h-screen w-full'>
      {/* <Battle /> */}
      {count > 9 ? (
        <div>
          <h1>{score}</h1>
          <form onSubmit={goToHome}>
            <button type='submit'>戻る</button>
          </form>
        </div>
      ) : (
        <div className='bg-red-300 min-h-screen w-full flex flex-col justify-center items-center'>
          <h1 className='font-PokeGB text-3xl text-white font-extrabold my-14 gray-shadow'>
            このポケモンの名前は？ カウントは{count}、 スコアは{score}
          </h1>
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
