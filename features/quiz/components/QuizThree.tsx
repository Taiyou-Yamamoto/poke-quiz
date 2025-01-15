import React from 'react';

const QuizThree = ({ text }: { text: string }) => {
  return (
    <h1 className='flex text-3xl p-5 justify-center items-center border-4 border-yellow-400 bg-white rounded-md m-10 shadow w-[35rem] h-auto break-words'>
      {text}
    </h1>
  );
};

export default QuizThree;
