'use client';

import React from 'react';

const AnswerButtons = () => {
  const judgeAnswer = (): void => {
    console.log('hello');
  };
  return (
    <div className='w-full grid grid-cols-4 gap-5'>
      <h1></h1>
      <button
        className='w-12 gray-shadow font-PokeJp font-extrabold text-white shadow-2xl active:shadow-none py-2 px-10 rounded-md border-solid border-4 border-blue-700 bg-yellow-400 mt-4 ring-4 col-span-1'
        onClick={judgeAnswer}
      >
        ヒトカゲ
      </button>
      <button
        className='w-12 gray-shadow font-extrabold font-PokeGB text-white shadow-2xl active:shadow-none py-2 px-4 rounded-md border-solid border-4 border-blue-700 bg-yellow-400 mt-4 ring-4 col-span-1'
        onClick={judgeAnswer}
      >
        ヒトカゲ
      </button>
      <h1></h1>
      <h1></h1>
      <button
        className='w-12 gray-shadow font-extrabold font-PokeGB text-white shadow-2xl active:shadow-none py-2 px-4 rounded-md border-solid border-4 border-blue-700 bg-yellow-400 mt-4 ring-4 col-span-1'
        onClick={judgeAnswer}
      >
        ヒトカゲ
      </button>
      <button
        className='w-12 gray-shadow font-extrabold font-PokeGB text-white shadow-2xl active:shadow-none py-2 px-4 rounded-md border-solid border-4 border-blue-700 bg-yellow-400 mt-4 ring-4 col-span-1'
        onClick={judgeAnswer}
      >
        ヒトカゲ
      </button>
      <h1></h1>
    </div>
  );
};

export default AnswerButtons;
