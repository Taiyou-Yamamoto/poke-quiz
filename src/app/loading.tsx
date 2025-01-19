import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div className='min-h-screen w-screen flex flex-row justify-center items-center'>
      <div className='font-PokeGB text-3xl'>
        <span
          className='inline-block myBounce'
          style={{ animationDelay: '0s' }}
        >
          L
        </span>
        <span
          className='inline-block myBounce'
          style={{ animationDelay: '0.3s' }}
        >
          o
        </span>
        <span
          className='inline-block myBounce'
          style={{ animationDelay: '0.6s' }}
        >
          a
        </span>
        <span
          className='inline-block myBounce'
          style={{ animationDelay: '0.9s' }}
        >
          d
        </span>
        <span
          className='inline-block myBounce'
          style={{ animationDelay: '1.2s' }}
        >
          i
        </span>
        <span
          className='inline-block myBounce'
          style={{ animationDelay: '1.5s' }}
        >
          n
        </span>
        <span
          className='inline-block myBounce'
          style={{ animationDelay: '1.8s' }}
        >
          g
        </span>
      </div>
      <Image
        className='myBounce '
        style={{ animationDelay: '2.1s', width: 'auto', height: 'auto' }}
        src={'/images/フシギダネ.png'}
        width={35}
        height={35}
        alt={'1'}
      />
      <Image
        className='myBounce'
        style={{ animationDelay: '2.4s', width: 'auto', height: 'auto' }}
        src={'/images/ヒトカゲ.png'}
        width={35}
        height={35}
        alt={'1'}
      />
      <Image
        className='myBounce'
        style={{ animationDelay: '2.7s', width: 'auto', height: 'auto' }}
        src={'/images/ゼニガメ.png'}
        width={35}
        height={35}
        alt={'1'}
      />
    </div>
  );
};

export default Loading;
