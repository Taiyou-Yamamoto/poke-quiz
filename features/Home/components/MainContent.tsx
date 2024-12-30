'use client';
import { getScore } from '@/app/utils/axiosHandle';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MainContent = () => {
  const [toggle, SetToggle] = useState<boolean>(false);
  const [rankData, SetRankData] = useState<number[]>([]);
  const toggleSwitch = () => {
    SetToggle(!toggle);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getScore();
      const array = [];
      for (const data of res.quiz1) {
        array.push(data.score);
      }

      while (array.length < 10) {
        array.push(null);
      }
      SetRankData(array);
      console.log(rankData);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('Updated rankData:', rankData); // rankData が更新された後に出力
  }, [rankData]);
  return (
    <div className='h-full w-full z-50'>
      <div className='relative z-50 start top-14 left-3/4'>
        <button className='yellow-button' onClick={toggleSwitch}>
          {toggle ? '戻る' : 'ランキング'}
        </button>
      </div>

      {toggle ? (
        <div className='relative z-50 h-4/6 w-[35rem] flex justify-center items-center mx-auto mt-28 bg-white bg-opacity-80 rounded-3xl shadow-xl border-4 border-sky-400'>
          <div className='font-DotJP h-full w-4/6 marker:text-4xl font-extrabold gray-shadow overscroll-x-auto'>
            <div className='my-10 text-3xl'>モンスターボールレベル</div>
            <ul className='flex-col text-2xl items-center justify-center'>
              {rankData.map((score, index) => (
                <li
                  key={index}
                  className='flex items-center justify-between w-full py-1'
                >
                  <span className='flex-shrink-0 w-[5rem] text-right'>
                    {index + 1}位:
                  </span>
                  <span className='ml-3 text-center w-full'>
                    {score ? score : '---------------------'}
                  </span>
                </li>
              ))}
            </ul>
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
