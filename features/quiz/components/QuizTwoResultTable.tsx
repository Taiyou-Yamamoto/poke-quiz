import { PokemonData } from '@/app/utils/type';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPause, faPlay, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

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

  const [cryURL, setCryURL] = useState<string>('');
  const [play] = useSound(cryURL, {
    onend: () => {
      console.info('Sound ended!');
    },
  });

  useEffect(() => {
    console.log(quizArray);
  }, []);

  const playCryInResult = (index: number) => {
    setIsPlayArray((array) => {});
    if (quizArray[index].cry) {
      setCryURL(quizArray[index].cry);
    }
    play();
  };
  return (
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
  );
};

export default QuizTwoResultTable;
