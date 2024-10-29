import Image from 'next/image';
import React from 'react';

import AnswerButtons from '../../../features/quiz/components/AnswerButtons';
import QuizImage from '../../../features/quiz/components/QuizImage';

const Page = async () => {
  return (
    <div>
      <QuizImage />
      <AnswerButtons />
    </div>
  );
};

export default Page;
