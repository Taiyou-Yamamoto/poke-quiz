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
      <div>スコア: {calculatedScore}</div>
      <div>{second}</div>
    </div>
  );
};

export default Score;
