'use client';
import { ImageArray } from '@/app/type';
import Image from 'next/image';
import React, { useEffect } from 'react';

const Background = ({ fiveImages }: ImageArray) => {
  const [First, Second, Third, Fourth, Fifth] = fiveImages;
  console.log('イメージ', First);
  useEffect(() => {
    console.log(First);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='absolute inset-0 z-0 opacity-85 flex-row flex-wrap'>
      {/* １段目 */}
      <div className='flex flex-row flex-nowrap'>
        {' '}
        {First.map((item: string, index) => {
          return (
            <div key={index} className={'inline-block'}>
              <Image
                className='w-auto h-auto mr-[5rem] my-16'
                src={item}
                width={300}
                height={300}
                alt={String(index)}
                priority
              />
            </div>
          );
        })}
      </div>

      {/* ２段目 */}
      <div className='flex flex-row flex-nowrap'>
        {' '}
        {Second.map((item: string, index) => {
          return (
            <div key={index} className={'inline-block'}>
              <Image
                className='w-auto h-auto mr-[5rem] my-16'
                src={item}
                width={300}
                height={300}
                alt={String(index)}
                priority
              />
            </div>
          );
        })}
      </div>

      {/* ３段目 */}
      <div className='flex flex-row flex-nowrap'>
        {' '}
        {Third.map((item: string, index) => {
          return (
            <div key={index} className={'inline-block'}>
              <Image
                className='w-auto h-auto mr-[5rem] my-16'
                src={item}
                width={300}
                height={300}
                alt={String(index)}
                priority
              />
            </div>
          );
        })}
      </div>

      {/* ４段目 */}
      <div className='flex flex-row flex-nowrap'>
        {' '}
        {Fourth.map((item: string, index) => {
          return (
            <div key={index} className={'inline-block'}>
              <Image
                className='w-auto h-auto mr-[5rem] my-16'
                src={item}
                width={300}
                height={300}
                alt={String(index)}
                priority
              />
            </div>
          );
        })}
      </div>

      {/* ５段目 */}
      <div className='flex flex-row flex-nowrap'>
        {' '}
        {Fifth.map((item: string, index) => {
          return (
            <div key={index} className={'inline-block'}>
              <Image
                className='w-auto h-auto mr-[5rem] my-16'
                src={item}
                width={300}
                height={300}
                alt={String(index)}
                priority
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Background;
