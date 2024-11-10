'use client';

import { InputProps } from '@/app/type';
import { audioPlay } from '@/app/utils/seHandle';
import React, { useEffect, useRef, useState } from 'react';

const Input = ({
  PokemonName,
  setCount,
  setScore,
  setYourResult,
}: InputProps) => {
  const [value, setValue] = useState<string>('');

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
    console.log('削除まえ', value);
    setCount((prev) => prev + 1);
    setYourResult((prev) => [...prev, value]);
    setValue('');
    // inputElement.current!.value = '';
    console.log('削除後', value);
  };

  return (
    <div className='block'>
      <form onSubmit={judgeAnswer} className='shadow'>
        <input
          type='text'
          className='text-3xl w-[14rem] font-extrabold rounded border-4 border-y-slate-700'
          onChange={handleValue}
          placeholder='ヒトカゲ'
          value={value}
          autoFocus
        />
      </form>
      <div>{PokemonName}</div>
    </div>
  );
};

export default Input;
