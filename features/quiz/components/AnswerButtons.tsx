'use client';

import React from 'react';

const AnswerButtons = () => {
  const judgeAnswer = (): void => {
    console.log('hello');
  };
  return (
    <div>
      <div className='ansers'>
        <button
          className='px-4 py-2 bg-yellow-400 font-extrabold'
          onClick={judgeAnswer}
        >
          ヒトカゲ
        </button>
      </div>
    </div>
  );
};

export default AnswerButtons;
