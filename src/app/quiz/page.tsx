import Image from 'next/image';
import React from 'react';

const Page = async () => {
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;
  // const allPokemonDate = await fetch(`${API_URL}/api/pokemon/all`);

  // console.log(allPokemonDate);
  return (
    <div className='min-h-screen flex flex-row justify-center items-center'>
      <div className='font-PokeGB '>
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
        className='myBounce'
        style={{ animationDelay: '2.1s' }}
        src={'/images/フシギダネ.png'}
        width={15}
        height={15}
        alt={'1'}
      />
      <Image
        className='myBounce'
        style={{ animationDelay: '2.4s' }}
        src={'/images/ヒトカゲ.png'}
        width={15}
        height={15}
        alt={'1'}
      />
      <Image
        className='myBounce'
        style={{ animationDelay: '2.7s' }}
        src={'/images/ゼニガメ.png'}
        width={15}
        height={15}
        alt={'1'}
      />
    </div>
  );
};

export default Page;
