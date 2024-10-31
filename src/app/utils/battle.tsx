'use client';

import React, { useRef, useEffect } from 'react';

const Battle = () => {
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

  return (
    <audio ref={audioRef} src='/bgm/iwashiro_pokemoso_battle_1.mp3' loop />
  );
};

export default Battle;
