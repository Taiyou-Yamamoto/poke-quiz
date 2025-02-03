'use client';

import { InputProps } from '@/app/utils/type';
import { audioPlay } from '@/app/utils/seHandle';
import React, { useState } from 'react';

const Input = ({
  PokemonName,
  setCount,
  setScore,
  setYourResult,
}: InputProps) => {
  const [value, setValue] = useState<string>('');

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const judgeAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === PokemonName) {
      setScore((prev) => prev + 1);
      audioPlay('/SE/se_itemget_013.wav');
    } else {
      audioPlay('/SE/boo.mp3');
    }

    setCount((prev) => prev + 1);
    setYourResult((prev) => [...prev, value]);
    setValue('');
  };

  return (
    <div className='flex items-center justify-center'>
      <form onSubmit={judgeAnswer}>
        <input
          type='text'
          className='text-3xl w-[14rem] font-extrabold rounded border-4 border-y-slate-700'
          onChange={handleValue}
          placeholder='ヒトカゲ'
          value={value}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Input;
