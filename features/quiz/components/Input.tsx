'use client';

import { PokemonName } from '@/app/type';
import React, { useRef, useState } from 'react';

const Input = ({ PokemonName, setCount, setScore }: PokemonName) => {
  const [value, SetValue] = useState<string>('');
  const inputElement = useRef<HTMLInputElement>(null);
  const changeValue = () => {
    SetValue(inputElement.current!.value);
  };

  const judgeAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputElement.current!.value === PokemonName) {
      setScore((prev) => prev + 1);
    }

    setCount((prev) => prev + 1);
    inputElement.current!.value = '';
  };
  return (
    <div className=' w-10/12 block'>
      {' '}
      <form onSubmit={judgeAnswer} className=''>
        <input
          type='text'
          className='text-3xl font-extrabold rounded'
          ref={inputElement}
          autoFocus
        />
      </form>
      <div>{PokemonName}</div>
    </div>
  );
};

export default Input;
