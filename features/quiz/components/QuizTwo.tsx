/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const QuizTwo = ({ cry }: { cry: string }) => {
  const cryRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (cryRef.current) {
      console.log(cryRef);
      cryRef.current.src = cry;
    }
  }, [cry]);

  const handleIsPlaying = () => {
    setIsPlaying(false);
  };

  const playCry = () => {
    setIsPlaying(true);
    if (cryRef.current) {
      cryRef.current.play();
    }
  };

  return (
    <>
      <audio
        ref={cryRef}
        onEnded={handleIsPlaying}
        onLoadedData={playCry}
      ></audio>

      <div className='flex justify-center items-center border-4 border-yellow-400 bg-white rounded-md m-10 shadow w-auto h-auto p-5'>
        <button className='h-[3rem] w-[3rem]' onClick={playCry}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size='3x' />
        </button>
      </div>
    </>
  );
};

export default QuizTwo;
