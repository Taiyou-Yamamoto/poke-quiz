import Image from 'next/image';
import React from 'react';

const QuizImage = () => {
  return (
    <div className='main'>
      <h1>個のポケモンの名前は？</h1>
      <Image
        className='myBounce'
        style={{ animationDelay: '2.1s' }}
        src={'/images/フシギダネ.png'}
        width={35}
        height={35}
        alt={'1'}
      />
    </div>
  );
};

export default QuizImage;
