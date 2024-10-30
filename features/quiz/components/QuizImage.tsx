import Image from 'next/image';
import React from 'react';

const QuizImage = () => {
  return (
    <div className='my-10 p-9 bg-white border-8 rounded shadow-2xl'>
      <Image
        src={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png'
        }
        width={120}
        height={120}
        alt={'1'}
      />
    </div>
  );
};

export default QuizImage;
