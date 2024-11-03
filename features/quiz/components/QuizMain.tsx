'use client';
import Battle from '@/app/utils/battle';
import React, { useState } from 'react';
import QuizImage from './QuizImage';
import Input from './Input';
import { quizArrayProps } from '@/app/type';

const QuizMain = ({ quizArray }: quizArrayProps) => {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <div>
      {/* <Battle /> */}
      <div className='bg-red-300 min-h-screen w-full flex flex-col justify-center items-center'>
        <h1 className='font-PokeGB text-3xl text-white font-extrabold my-14 gray-shadow'>
          このポケモンの名前は？
        </h1>
        <QuizImage image={quizArray[count].image} />
        <Input
          PokemonName={quizArray[count].name}
          setCount={setCount}
          setScore={setScore}
        />
      </div>
    </div>
  );
};

export default QuizMain;
