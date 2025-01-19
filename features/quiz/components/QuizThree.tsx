import React from 'react';

const QuizThree = ({ text }: { text: string }) => {
  return (
    <h1 className=' w-5/6 h-auto text-3xl  m-10 p-5 flex justify-center items-center bg-white border-4 border-yellow-400  rounded-md shadow  break-words'>
      {text}
    </h1>
  );
};

export default QuizThree;
