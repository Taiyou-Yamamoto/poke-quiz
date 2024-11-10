import { PokemonImage, quizArrayProps } from '@/app/type';
import Image from 'next/image';
import React from 'react';

const QuizImage = ({ image }: PokemonImage) => {
  return (
    <div className='w-72 h-72  border-4 border-yellow-400 bg-white rounded-md m-10 shadow'>
      <Image
        src={image}
        width={120}
        height={120}
        alt={'1'}
        key={image}
        priority
      />
    </div>
  );
};

export default QuizImage;
