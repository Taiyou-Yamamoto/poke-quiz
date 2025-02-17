/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { ToggleSwitch } from './utils/MaterialUI';

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [bgmSrc, setBgmSrc] = useState<string>('');
  // const [firstPlay, setFirstPlay] = useState<boolean>(true);
  const pathname = usePathname();

  //BGM用
  const audioRef = useRef<HTMLAudioElement>(null);

  // BGM用のトグルボタン関数
  const controlToggle = () => {
    if (audioRef.current) {
      // if (firstPlay && audioRef.current) {
      console.log(audioRef.current);
      audioRef.current.volume = 0.3;
      audioRef.current.play();
      // setFirstPlay(false);
    }
    setToggle((prev) => !prev);
  };

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
      audioRef.current.src = bgmSrc;
      audioRef.current.volume = 0.15;
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
    <div className='fixed flex flex-row items-center justify-center z-50 sm:top-12 sm:left-14 top-4 left-4  bg-amber-300 rounded-2xl shadow'>
      {/* BGM用 */}
      <audio
        ref={audioRef}
        loop={!(pathname === '/result_high' || pathname === '/result_low')}
      />
      <div onClick={controlToggle} className='cursor-pointer'>
        <span className='w-full ml-3 font-semibold  text-white dark:text-gray-300 gray-shadow'>
          BGM
        </span>
        <ToggleSwitch checked={toggle} />
      </div>
    </div>
  );
};

export default Header;
