import { scoreCalculateProps } from '@/app/type';
import React, { useState } from 'react';

const Score = ({ score, count }: scoreCalculateProps) => {
  setCalculatedScore();
  const [calculatedScore, setCalculatedScore] = useState<number>(0);
  return <div>スコア: {calculatedScore}</div>;
};

export default Score;
