import { scoreCalculateProps } from '@/app/type';
import React, { useEffect, useState } from 'react';

const Score = ({
  score,
  second,
  calculatedScore,
  setCalculatedScore,
}: scoreCalculateProps) => {
  useEffect(() => {
    const calculatedData = score * 1.1 * (second * Math.pow(score, 0.7)) * 10;
    setCalculatedScore(Math.floor(calculatedData));
  }, [second, score]);
  return (
    <div>
      <div className='flex font-DotJP text-white text-3xl font-extrabold gray-shadow justify-center items-center mb-5'>
        スコア:
        <p className='font-PokeGB text-white text-3xl font-extrabold gray-shadow pt-3'>
          {calculatedScore}
        </p>
      </div>
    </div>
  );
};

export default Score;
