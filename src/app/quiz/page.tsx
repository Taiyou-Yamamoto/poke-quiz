import Image from 'next/image';
import React from 'react';
import AnswerButtons from '../../../features/quiz/components/AnswerButtons';
import QuizImage from '../../../features/quiz/components/QuizImage';

const Page = async () => {
  return (
    <div className='bg-red-300 min-h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='font-PokeGB text-3xl text-white font-extrabold my-14 gray-shadow'>
        このポケモンの名前は？
      </h1>
      <div className='w-full bg-white p-11 border-8 rounded'>
        <QuizImage />
      </div>
      <div className='w-full mt-10'>
        <AnswerButtons />
      </div>
    </div>
  );
};

export default Page;
