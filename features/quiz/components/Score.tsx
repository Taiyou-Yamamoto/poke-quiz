/* eslint-disable react-hooks/exhaustive-deps */
import { scoreCalculateProps } from '@/app/type';
import React, { useEffect } from 'react';

const Score = ({
  score,
  second,
  calculatedScore,
  setCalculatedScore,
}: scoreCalculateProps) => {
  useEffect(() => {
    let calculatedData;
    if (second === 0) {
      calculatedData = score * 1.1 * Math.pow(score, 0.7) * 10 * 0.95;
    } else {
      calculatedData = score * 1.1 * (second * Math.pow(score, 0.7)) * 10;
    }
    setCalculatedScore(Math.floor(calculatedData));
    console.log('calculatedScore', calculatedScore);
    console.log('second', second);
    console.log('score', score);
    console.log(calculatedData);
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
