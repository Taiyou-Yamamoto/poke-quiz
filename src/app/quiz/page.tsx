import Image from 'next/image';
import React from 'react';
import QuizImage from '../../../features/quiz/components/QuizImage';
import AnswerButtons from '../../../features/quiz/components/AnswerButtons';

const Page = async () => {
  return (
    <div>
      <QuizImage />
      <AnswerButtons />
    </div>
  );
};

export default Page;
