import Image from 'next/image';
import React from 'react';

const QuizOne = ({ image }: { image: string }) => {
  return (
    <div className='flex max-w-[10rem] max-h-[10rem] justify-center items-center border-4 border-yellow-400 bg-white rounded-md m-10 shadow w-auto h-auto'>
      <Image
        src={image}
        width={130}
        height={130}
        alt={'2'}
        key={image}
        priority
      />
    </div>
  );
};

export default QuizOne;
