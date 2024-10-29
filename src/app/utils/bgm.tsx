'use client';

import React, { useRef, useEffect } from 'react';

const BGM = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playBGM = async () => {
      // muted属性を一時的に設定し、再生を開始してから解除する（自動再生制限を回避）
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
