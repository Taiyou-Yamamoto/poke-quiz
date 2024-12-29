'use client';
import { getScore } from '@/app/utils/axiosHandle';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MainContent = () => {
  const [toggle, SetToggle] = useState<boolean>(false);
  const toggleSwitch = () => {
    SetToggle(!toggle);
  };

  useEffect(() => {
    const res = getScore();
    console.log(res);
  }, []);
  return (
    <div className='h-full w-full z-50'>
      <div className='relative z-50 start top-14 left-3/4'>
        <button className='yellow-button' onClick={toggleSwitch}>
          {toggle ? '戻る' : 'ランキング'}
        </button>
      </div>

      {toggle ? (
        <div className='relative z-50 h-4/6 w-[35rem] flex justify-center items-center mx-auto mt-28 bg-white bg-opacity-80 rounded-3xl shadow-xl border-4 border-sky-400'>
          <div className='text-4xl font-extrabold gray-shadow overscroll-x-auto'>
            <div className='font-DotJP'>モンスターボールレベル</div>
            <div className='flex-col items-center justify-center'>
              <p className='text-[#FFD700] font-DotJP text-4xl font-extrabold gray-shadow'>
                1位: --------------
              </p>
              <p className='text-[#C0C0C0] font-DotJP text-4xl font-extrabold gray-shadow'>
                2位: --------------
              </p>
              <p className='text-[#B87333] font-DotJP text-4xl font-extrabold gray-shadow'>
                3位: --------------
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {' '}
          <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
            <div className=''>
              <Image
                className='animate-chime mx-auto w-auto h-auto'
                src='/images/Poke-quiz.png'
                alt='My Image'
                width={500}
                height={300}
              />
            </div>
            <Link
              href='/quiz'
              className='w-[10rem] mx-auto font-DotJP gray-shadow hover:animate-shake font-extrabold text-white shadow-2xl active:shadow-none py-2 px-4 rounded-md border-solid border-4 bg-red-600 border-white mt-4 ring-offset-2 ring-4'
            >
              モンスタ-レベル
            </Link>
            <Link
              href='/quiz2'
              className='w-[10rem] mx-auto font-DotJP hover:animate-shake font-extrabold text-white shadow-2xl active:shadow-none py-2 px-4 pl-6 rounded-md border-solid border-4 border-red-600 bg-blue-500 mt-4 ring-offset-2 ring-4'
            >
              スーパ-レベル
            </Link>
            <Link
              href='/quiz3'
              className='w-[10rem] mx-auto font-DotJP hover:animate-shake font-extrabold text-white shadow-2xl active:shadow-none py-2 px-4 pl-6 rounded-md border-solid border-4 border-yellow-400 bg-gray-700 mt-4 ring-offset-2 ring-4'
            >
              ハイパーレベル
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MainContent;
