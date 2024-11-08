'use client';

import { PokemonName } from '@/app/type';
import { audioPlay } from '@/app/utils/seHandle';
import React, { useRef, useState } from 'react';

const Input = ({
  PokemonName,
  setCount,
  setScore,
  setYourResult,
}: PokemonName) => {
  const inputElement = useRef<HTMLInputElement>(null);

  const judgeAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputElement.current!.value === PokemonName) {
      setScore((prev) => prev + 1);
      audioPlay('/SE/se_itemget_013.wav');
    } else {
      audioPlay('/SE/boo.mp3');
    }

    setCount((prev) => prev + 1);
    setYourResult((prev) => {
      return [...prev, inputElement.current!.value];
    });
    inputElement.current!.value = '';
  };
  return (
    <div className=' w-1/4 block'>
      <form onSubmit={judgeAnswer} className='shadow'>
        <input
          type='text'
          className='text-3xl font-extrabold rounded border-4 border-y-slate-700'
          ref={inputElement}
          placeholder='ヒトカゲ'
          autoFocus
        />
      </form>
      <div>{PokemonName}</div>
    </div>
  );
};

export default Input;
