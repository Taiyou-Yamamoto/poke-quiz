'use client';

import React, { useRef, useState } from 'react';

const Input = () => {
  const [value, SetValue] = useState<string>('');
  const inputElement = useRef<HTMLInputElement>(null);
  const changeValue = () => {
    SetValue(inputElement.current!.value);
  };
  console.log(inputElement);
  return (
    <div className='flex flex-col justify-center items-center text-center mx-auto'>
      <h1 className='text-white text-3xl font-extrabold'>{value}</h1>
      <input
        type='text'
        className='bg-red-300 text-white text-3xl font-extrabold inline-block items-center'
        ref={inputElement}
        onChange={changeValue}
      />
    </div>
  );
};

export default Input;
