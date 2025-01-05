import React from 'react';
import Score from './Score';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import XPost from './XPost';
import { Quiz, ResultProps } from '@/app/type';

const Result_1 = ({
  score,
  calculatedScore,
  setCalculatedScore,
  resultMessage,
  quizArray,
  yourResult,
  oneMore,
  goToHome,
}: ResultProps) => {
  return (
    <div className=' w-full flex flex-col justify-center items-center bg-red-300 py-11'>
      <Score
        score={score}
        second={score}
        calculatedScore={calculatedScore}
        setCalculatedScore={setCalculatedScore}
      />
      <div className='text-3xl text-white font-extrabold gray-shadow'>
        {resultMessage}
      </div>
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
          {quizArray.map((pokemon: Quiz, index) => {
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
                  <h3 className='min-w-36 text-white gray-shadow  font-extrabold text-2xl'>
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

      <div className='flex flex-col relative'>
        <form onSubmit={oneMore}>
          <button type='submit' className='my-5 yellow-button'>
            再挑戦する
          </button>
        </form>

        <form onSubmit={goToHome}>
          <button type='submit' className='yellow-button'>
            ホームへ戻る
          </button>
        </form>
        <div className='absolute bottom-0 left-60'>
          <XPost calculatedScore={calculatedScore} />
        </div>
      </div>
    </div>
  );
};

export default Result_1;
