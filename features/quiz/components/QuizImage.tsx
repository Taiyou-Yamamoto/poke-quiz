import Image from 'next/image';
import React from 'react';

const QuizImage = () => {
  return (
    <div className='main my-10'>
      <div className='p-12 bg-white inline-block'>
        <div className='bg-white p-12'>
          <Image
            src={
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png'
            }
            width={120}
            height={120}
            alt={'1'}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizImage;
