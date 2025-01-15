import { PokemonData } from '@/app/utils/type';
import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const QuizThreeResultTable = ({
  quizArray,
  yourResult,
}: {
  quizArray: PokemonData[];
  yourResult: string[];
}) => {
  return (
    <table className='w-[650px] mt-10 h-full border-separate border-spacing-y-4'>
      <thead>
        <tr>
          <th colSpan={3} className=''>
            答え
          </th>
          <th colSpan={2} className='ml-10'>
            あなたの回答
          </th>
        </tr>
      </thead>
      <tbody>
        {quizArray.map((pokemon: PokemonData, index: number) => {
          return (
            <tr key={index}>
              <td className='text-lg p-5 border-4 border-yellow-400 bg-white rounded-md shadow w-[15rem] h-auto break-words'>
                {pokemon.text}
              </td>
              <td className='h-full w-[10rem] flex flex-col items-center justify-center'>
                <Image
                  src={pokemon.image}
                  width={80}
                  height={80}
                  key={pokemon.image}
                  alt=''
                />
                <h3 className='text-white gray-shadow font-extrabold text-2xl'>
                  {pokemon.name}
                </h3>
              </td>
              <td></td>
              <td>
                <h3 className='flex justify-center items-center min-w-36 text-white gray-shadow font-extrabold text-2xl'>
                  {yourResult[index]}
                </h3>
              </td>
              <td>
                {pokemon.name === yourResult[index] ? (
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

export default QuizThreeResultTable;
