'use client';

import { PokemonName } from '@/app/type';
import React, { useRef, useState } from 'react';

const Input = ({ PokemonName, setScore }: PokemonName) => {
  const [value, SetValue] = useState<string>('');
  const inputElement = useRef<HTMLInputElement>(null);
  const changeValue = () => {
    SetValue(inputElement.current!.value);
  };

  const judgeAnswer = () => {
    if (inputElement.current!.value === PokemonName) {
      //   console.log(PokemonName);
      setScore(1);
    }
  };
  console.log(inputElement);
  return (
    <div className='flex flex-col justify-center items-center text-center mx-auto'>
      <h1 className='text-white font-PokeJp text-3xl font-extrabold '>
        {value}
        <span className='inline-block animate-blink'>|</span>
      </h1>
      <input
        type='text'
        className='bg-red-300 text-white text-3xl font-extrabold inline-block items-center border-none'
        ref={inputElement}
        onChange={changeValue}
        onKeyDown={judgeAnswer}
        autoFocus
      />
    </div>
  );
};

export default Input;
