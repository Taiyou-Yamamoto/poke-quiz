/* eslint-disable react-hooks/exhaustive-deps */
import { scoreCalculateProps } from '@/app/utils/type';
import React, { useEffect } from 'react';

const Score = ({
  count,
  score,
  second,
  calculatedScore,
  setCalculatedScore,
}: scoreCalculateProps) => {
  useEffect(() => {
    if (count > 9 || second === 0)
      if (second === 0) {
        setCalculatedScore(
          Math.floor(score * 1.1 * Math.pow(score, 0.7) * 10 * 0.95)
        );
      } else {
        setCalculatedScore(
          Math.floor(score * 1.1 * (second * Math.pow(score, 0.7)) * 10)
        );
      }

    console.log('second', second);
    console.log('score', score);
  }, [second, count]);

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
