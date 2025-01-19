import { PokemonData } from '@/app/utils/type';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPause, faPlay, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

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
      <table className='w-[500px] mt-10'>
        <thead>
          <tr>
            <th colSpan={3} className='mr-10 pr-5'>
              答え
            </th>
            <th colSpan={2} className='ml-10 pl-5'>
              あなたの回答
            </th>
          </tr>
        </thead>
        <tbody>
          {quizArray.map((pokemon: PokemonData, index: number) => {
            return (
              <tr key={index}>
                <td className='my-3'>
                  <button
                    onClick={() => {
                      playCryInResult(index);
                    }}
                    className='h-10 w-10 bg-slate-200 rounded-full shadow'
                  >
                    <FontAwesomeIcon
                      icon={isPlayArray[index] ? faPause : faPlay}
                    />
                  </button>
                </td>
                <td>
                  <Image
                    src={pokemon.image}
                    width={80}
                    height={80}
                    key={pokemon.image}
                    alt={''}
                    className='pl-3'
                  />
                </td>
                <td>
                  <h3 className='mr-5 text-white gray-shadow font-extrabold text-2xl'>
                    {pokemon.name}
                  </h3>
                </td>
                <td>
                  <h3 className='flex justify-center items-center pl-5 min-w-36 text-white gray-shadow  font-extrabold text-2xl'>
                    {yourResult[index]}
                  </h3>
                </td>
                <td>
                  {pokemon.name == yourResult[index] ? (
                    <FontAwesomeIcon
                      icon={faCircle}
                      className='text-lime-500 gray-shadow font-extrabold text-2xl'
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faXmark}
                      className='text-red-600 gray-shadow font-extrabold text-2xl'
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default QuizTwoResultTable;
