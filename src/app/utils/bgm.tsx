'use client';

import React, { useRef, useEffect } from 'react';

const BGM = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playBGM = async () => {
      if (audioRef.current) {
        await audioRef.current.play();
      }
    };
    playBGM();
    console.log(audioRef.current);
  }, []);

  return <audio ref={audioRef} src='/bgm/iwashiro_kokage_biyori.mp3' loop />;
};

export default BGM;
