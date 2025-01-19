/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useRef, useState } from 'react';
import useSound from 'use-sound';
import { ControlCriesContext } from './Provider';
import { ToggleSwitch } from './utils/MaterialUI';

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [bgmSrc, setBgmSrc] = useState<string>('');
  const [firstPlay, setFirstPlay] = useState<boolean>(true);
  const pathname = usePathname();

  //BGM用
  const audioRef = useRef<HTMLAudioElement>(null);
  //QuizTwoの鳴き声再生用
  // const cryRef = useRef<HTMLAudioElement>(null);
  //Header.tsxとQuizTwoを連携するためのコンテキスト
  // const controlCries = useContext(ControlCriesContext);

  // BGM用のトグルボタン関数
  const controlToggle = () => {
    if (firstPlay && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
      setFirstPlay(false);
    }
    setToggle((prev) => !prev);
  };

  //鳴き声再生後、再生状態をfalseへ
  // const switchIsPlay = () => {
  //   controlCries?.setIsPlaying(false);
  // };

  //ここでquiz2の音声をコントロールする
  // useEffect(() => {
  //   if (cryRef.current) {
  //     cryRef.current.volume = 1;
  //     if (controlCries?.cry) {
  //       cryRef.current.pause();
  //       cryRef.current.src = controlCries.cry;
  //     }
  //     cryRef.current.play();

  //     if (controlCries?.setIsPlaying) {
  //       controlCries.setIsPlaying(true);
  //     }
  //   }
  // }, [controlCries?.cry]);

  // useEffect(() => {
  //   if (controlCries?.isPlaying) {
  //     cryRef.current?.play();
  //   }
  // }, [controlCries?.isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = bgmSrc;
      audioRef.current.volume = 0.15;
      audioRef.current.load();
      if (toggle) {
        audioRef.current.play().catch((e) => console.error(e));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bgmSrc]);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setBgmSrc('/bgm/iwashiro_kokage_biyori.mp3');
        break;
      case '/quiz1':
        setBgmSrc('/bgm/iwashiro_pokemoso_battle_1.mp3');
        break;
      case '/quiz2':
        setBgmSrc('/bgm/iwashiro_pokemoso_battle_2.mp3');
        break;
      case '/quiz3':
        setBgmSrc('/bgm/iwashiro_pokemoso_battle_3.mp3');
        break;
      case '/result_high':
        setBgmSrc('/bgm/audiostock_1116777.wav');
        break;
      case '/result_low':
        setBgmSrc('/bgm/iwa_gameover010.mp3');
        break;
      default:
        setBgmSrc('');
    }
  }, [pathname]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = bgmSrc;
      audioRef.current.volume = 0.15;
      audioRef.current.load();
      if (toggle) {
        audioRef.current.play().catch((e) => console.error(e));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bgmSrc]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = !toggle;
    }

    console.log('audio', audioRef.current);
  }, [toggle]);

  return (
    <div className='absolute flex flex-row items-center justify-center z-50 top-12 left-14 bg-orange-400 rounded-2xl shadow'>
      {/* BGM用 */}
      <audio
        ref={audioRef}
        loop={!(pathname === '/result_high' || pathname === '/result_low')}
      />
      <ToggleSwitch checked={toggle} onChange={controlToggle} />
      <span className='w-full mr-3 font-semibold  text-white dark:text-gray-300 gray-shadow'>
        BGM
      </span>
    </div>
  );
};

export default Header;
