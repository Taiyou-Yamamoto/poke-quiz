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
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 mt-10'>
      {quizArray.map((pokemon, index) => (
        <div
          key={index}
          className='relative bg-orange-100 rounded-lg shadow-lg p-4 flex flex-col items-center'
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
            className='rounded-full mb-4'
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
        </div>
      ))}
    </div>
  );
};

export default QuizOneResultTable;
