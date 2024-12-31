'use client';
import { ImageArray } from '@/app/type';
import Image from 'next/image';
import React from 'react';

const Background = ({ imageArray }: ImageArray) => {
  return (
    <div className='absolute inset-0 z-0 opacity-85 flex flex-wrap'>
      {imageArray.map((pokemonUrl: string, index: number) => {
        return (
          <div key={index}>
            <Image
              className='w-auto h-auto'
              src={pokemonUrl}
              width={300}
              height={300}
              alt={String(index)}
              priority
            />
          </div>
        );
      })}
    </div>
  );
};

export default Background;
