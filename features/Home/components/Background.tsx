'use client';
import { ImageArray } from '@/app/type';
import Image from 'next/image';
import React from 'react';

const Background = ({ fiveImages }: ImageArray) => {
  const [First, Second, Third, Fourth, Fifth] = fiveImages;

  const ArrayRepeater = (array: string[], times: number) => {
    return Array(times).fill(array).flat();
  };

  return (
    <div className='absolute inset-0 z-0 opacity-85 flex-row flex-wrap'>
      {/* １段目 */}
      <div className='flex flex-row justify-items-end flex-nowrap animate-slide'>
        {' '}
        {ArrayRepeater(First, 4).map((item: string, index) => {
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
      <div className='flex flex-row flex-nowrap animate-reverse_slide'>
        {' '}
        {ArrayRepeater(Second, 4).map((item: string, index) => {
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
      <div className='flex flex-row flex-nowrap animate-slide'>
        {' '}
        {ArrayRepeater(Third, 4).map((item: string, index) => {
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
      <div className='flex flex-row flex-nowrap animate-reverse_slide'>
        {' '}
        {ArrayRepeater(Fourth, 4).map((item: string, index) => {
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
      <div className='flex flex-row flex-nowrap animate-slide'>
        {' '}
        {ArrayRepeater(Fifth, 4).map((item: string, index) => {
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
