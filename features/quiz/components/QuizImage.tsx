import { PokemonImage } from '@/app/type';
import Image from 'next/image';
import React from 'react';

const QuizImage = ({ image }: PokemonImage) => {
  return (
    <div className='flex justify-center items-center w-40 h-40  border-4 border-yellow-400 bg-white rounded-md m-10 shadow'>
      <Image
        src={image}
        width={130}
        height={130}
        alt={'1'}
        key={image}
        priority
      />
    </div>
  );
};

export default QuizImage;
