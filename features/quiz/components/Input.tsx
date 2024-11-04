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
    if (inputElement.current!.value === PokemonName) {
      setScore((prev) => prev + 1);
    }

    setCount((prev) => prev + 1);
    inputElement.current!.value = '';
  };
  return (
    <form onSubmit={judgeAnswer}>
      <input
        type='submit'
        className='text-3xl font-extrabold rounded w-2'
        ref={inputElement}
        autoFocus
      />
    </form>
  );
};

export default Input;
