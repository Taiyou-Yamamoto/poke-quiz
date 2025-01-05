import React from 'react';
import XPost from './XPost';

const RetryAndHome = ({
  oneMore,
  goToHome,
  calculatedScore,
}: {
  oneMore: (e: React.FormEvent<HTMLFormElement>) => void;
  goToHome: (e: React.FormEvent<HTMLFormElement>) => void;
  calculatedScore: number;
}) => {
  return (
    <div className='flex flex-col relative'>
      {' '}
      <form onSubmit={oneMore}>
        <button type='submit' className='my-5 yellow-button'>
          再挑戦する
        </button>
      </form>
      <form onSubmit={goToHome}>
        <button type='submit' className='yellow-button'>
          ホームへ戻る
        </button>
      </form>
      <XPost calculatedScore={calculatedScore} />
    </div>
  );
};

export default RetryAndHome;
