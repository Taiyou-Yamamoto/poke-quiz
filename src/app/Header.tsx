'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { FC, useEffect, useRef, useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [bgmSrc, setBgmSrc] = useState<string>('');

  const audioRef = useRef<HTMLAudioElement>(null);
  const pathname = usePathname();
  const controlToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    switch (pathname) {
      case '/':
        setBgmSrc('/bgm/iwashiro_kokage_biyori.mp3');
        break;
      case '/quiz':
        setBgmSrc('/bgm/iwashiro_pokemoso_battle_1.mp3');
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
      audioRef.current.load();
      if (toggle) {
        audioRef.current.play();
      }
    }
  }, [bgmSrc]);

  useEffect(() => {
    if (audioRef.current) {
      if (toggle) {
        audioRef.current.play();
      }
      audioRef.current.muted = !toggle;
    }

    console.log('audio', audioRef.current);
  }, [toggle]);

  return (
    <div className='bg-opacity-0 m-10'>
      <audio
        ref={audioRef}
        loop={!(pathname === '/result_high' || pathname === '/result_low')}
      />
      <label className='inline-flex items-center cursor-pointer bg-orange-400 px-2 py-4 rounded shadow'>
        <input
          type='checkbox'
          className='sr-only peer'
          checked={toggle}
          onChange={controlToggle}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className='ms-3 font-semibold  text-white dark:text-gray-300 gray-shadow'>
          BGM
        </span>
      </label>
    </div>
  );
};

export default Header;
