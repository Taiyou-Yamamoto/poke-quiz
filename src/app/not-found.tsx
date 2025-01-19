import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='min-h-screen w-screen flex flex-col items-center justify-center font-DotJP'>
      <h1 className='text-2xl font-extrabold'>ページが見つからないよ...</h1>
      <Link href='/' className='text-lg mt-5 yellow-button'>
        ホームへ戻る
      </Link>
    </div>
  );
};

export default NotFound;
