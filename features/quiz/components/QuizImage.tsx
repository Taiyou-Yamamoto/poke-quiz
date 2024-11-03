import { PokemonImage, quizArrayProps } from '@/app/type';
import Image from 'next/image';
import React from 'react';

const QuizImage = ({ image }: PokemonImage) => {
  return (
    <div className=''>
      <Image src={image} width={120} height={120} alt={'1'} priority />
    </div>
  );
};

export default QuizImage;
