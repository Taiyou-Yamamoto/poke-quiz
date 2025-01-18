import React from 'react';

const QuizStartScreen = ({
  setQuizStart,
}: {
  setQuizStart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const startAction = (e: any) => {
    if (e.key === ' ') {
      console.log('hello');
      setQuizStart(false);
    }
  };
  return (
    <div
      tabIndex={0}
      className='h-screen w-full flex items-center justify-center'
      onKeyDown={startAction}
    >
      スペースを押してね!
    </div>
  );
};

export default QuizStartScreen;
