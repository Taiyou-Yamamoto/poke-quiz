/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import { ControlCriesContext } from '@/app/Provider';
const QuizTwo = ({ cry }: { cry: string }) => {
  const controlCries = useContext(ControlCriesContext);

  /** 流れの説明
   * 1.QuizTwo.tsxでcryの変更を監視
   * 2.QuizTwo.tsxでcryが変更されたら、ContextにcryとIsPlayの状態をセット
   * 3.Header.tsxでContextのcryの変更があった場合に、cryを再生
   * 4.Header.tsxでContextのcryの再生が終わったらContextのIsPlayをfalseへセット
   *
   */

  useEffect(() => {
    controlCries?.setCry(cry); //Header用にcryをセット
    controlCries?.setIsPlaying(true); //Header用にIsPlayの状態をセット
  }, [cry]);

  useEffect(() => {
    controlCries?.setCry(cry); //Header用にcryをセット
    controlCries?.setIsPlaying(true); //Header用にIsPlayの状態をセット
  }, []);

  const playCry = () => {
    controlCries?.setIsPlaying(true);
  };

  return (
    <div className='flex justify-center items-center border-4 border-yellow-400 bg-white rounded-md m-10 shadow w-auto h-auto p-5'>
      {' '}
      <button className='h-[3rem] w-[3rem]' onClick={playCry}>
        <FontAwesomeIcon
          icon={controlCries?.isPlaying ? faPause : faPlay}
          size='3x'
        />
      </button>
    </div>
  );
};

export default QuizTwo;
