import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-extrabold'>ページが見つからないよ...</h1>
      <Link
        href='/'
        className='text-lg bg-yellow-400 hover:bg-yellow-500 gray-shadow max-w-[150px] font-extrabold font-PokeGB text-white py-2 px-4 rounded-md border-solid border-4 mt-4 ring-4 hover:ring-blue-500 shadow-2xl hover:shadow-none transition-all duration-300'
      >
        ホームへ戻る
      </Link>
    </div>
  );
};

export default NotFound;
