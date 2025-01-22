import { PokemonData } from '@/app/utils/type';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPause, faPlay, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const QuizTwoResultTable = ({
  quizArray,
  yourResult,
}: {
  quizArray: PokemonData[];
  yourResult: string[];
}) => {
  const [isPlayArray, setIsPlayArray] = useState<boolean[]>(
    new Array(quizArray.length).fill(false)
  );
  const [audioArray, setAudioArray] = useState(null);
  const cryRef = useRef<HTMLAudioElement>(null);
  const [cryURL, setCryURL] = useState<string>('');

  const playCryInResult = (index: number) => {
    // ボタンの状態を更新
    //indexだけ必要なので、elementは_としておく
    setIsPlayArray((prev) => prev.map((_, i) => i === index));

    if (cryRef.current) {
      cryRef.current.pause();
      cryRef.current.src = quizArray[index].cry || '';
      cryRef.current.load();
      cryRef.current.play().catch((e) => console.error(e));
    }
  };

  //再生後、ボタンの状態をfalseへ戻す
  const resetIsPlayArray = () => {
    setIsPlayArray(new Array(quizArray.length).fill(false));
  };

  return (
    <>
      <audio ref={cryRef} onEnded={resetIsPlayArray}></audio>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 mt-10'>
        {quizArray.map((pokemon, index) => (
          <div
            key={index}
            className='relative bg-orange-200 rounded-lg shadow-lg p-4 flex flex-col items-center'
          >
            <h3 className='absolute top-2 left-2 gray-shadow font-extrabold'>
              No.{index + 1}
            </h3>
            {/* ポケモン画像 */}
            <Image
              src={pokemon.image}
              width={100}
              height={100}
              alt={pokemon.name}
              className='mb-4'
            />

            {/* 正解 */}
            <div className='flex flex-col justify-start'>
              <h3 className='text-xl font-extrabold text-white gray-shadow mb-2'>
                正解: {pokemon.name}
              </h3>

              {/* あなたの回答 */}
              <h3 className='text-xl font-extrabold text-gray-700 mb-4'>
                回答: {yourResult[index]}
              </h3>
            </div>

            {/* 正誤アイコン */}
            {pokemon.name === yourResult[index] ? (
              <FontAwesomeIcon
                icon={faCircle}
                className='absolute top-2 right-2 text-lime-500 text-3xl'
              />
            ) : (
              <FontAwesomeIcon
                icon={faXmark}
                className='absolute top-2 right-2 text-red-600 text-3xl'
              />
            )}
            <button
              onClick={() => {
                playCryInResult(index);
              }}
              className='h-10 w-10 bg-slate-200 rounded-full shadow border-4'
            >
              <FontAwesomeIcon icon={isPlayArray[index] ? faPause : faPlay} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuizTwoResultTable;
