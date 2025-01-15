import { PokemonData } from '@/app/utils/type';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const QuizOneResultTable = ({
  quizArray,
  yourResult,
}: {
  quizArray: PokemonData[];
  yourResult: string[];
}) => {
  return (
    <table className='mt-10'>
      <thead>
        <tr>
          <th colSpan={2} className='mr-10'>
            答え
          </th>
          <th colSpan={2} className='ml-10'>
            あなたの回答
          </th>
        </tr>
      </thead>
      <tbody>
        {quizArray.map((pokemon, index: number) => {
          return (
            <tr key={index}>
              <td>
                <Image
                  src={pokemon.image}
                  width={80}
                  height={80}
                  key={pokemon.image}
                  alt={''}
                />
              </td>
              <td>
                <h3 className='mr-5 text-white gray-shadow font-extrabold text-2xl'>
                  {pokemon.name}
                </h3>
              </td>
              <td>
                <h3 className='flex justify-center items-center min-w-36 text-white gray-shadow  font-extrabold text-2xl'>
                  {yourResult[index]}
                </h3>
              </td>
              <td>
                {' '}
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

export default QuizOneResultTable;
