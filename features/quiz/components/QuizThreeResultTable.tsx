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

          <div className='text-lg p-5 mb-4 border-4 border-yellow-400 bg-white rounded-md shadow w-[15rem] h-auto break-words'>
            {pokemon.text}
          </div>
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

    // <table className='w-[650px] mt-10 h-full border-separate border-spacing-y-4'>
    //   <thead>
    //     <tr>
    //       <th colSpan={3} className=''>
    //         答え
    //       </th>
    //       <th colSpan={2} className='ml-10'>
    //         あなたの回答
    //       </th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {quizArray.map((pokemon: PokemonData, index: number) => {
    //       return (
    //         <tr key={index}>
    //           <td className='text-lg p-5 border-4 border-yellow-400 bg-white rounded-md shadow w-[15rem] h-auto break-words'>
    //             {pokemon.text}
    //           </td>
    //           <td className='h-full sm:w-[10rem] flex flex-col items-center justify-center'>
    //             <Image
    //               src={pokemon.image}
    //               width={80}
    //               height={80}
    //               key={pokemon.image}
    //               alt=''
    //             />
    //             <h3 className='text-white gray-shadow font-extrabold text-2xl'>
    //               {pokemon.name}
    //             </h3>
    //           </td>
    //           <td></td>
    //           <td>
    //             <h3 className='flex justify-center items-center min-w-36 text-white gray-shadow font-extrabold text-2xl'>
    //               {yourResult[index]}
    //             </h3>
    //           </td>
    //           <td>
    //             {pokemon.name === yourResult[index] ? (
    //               <FontAwesomeIcon
    //                 icon={faCircle}
    //                 className='text-lime-500 gray-shadow font-extrabold text-2xl'
    //               />
    //             ) : (
    //               <FontAwesomeIcon
    //                 icon={faXmark}
    //                 className='text-red-600 gray-shadow font-extrabold text-2xl'
    //               />
    //             )}
    //           </td>
    //         </tr>
    //       );
    //     })}
    //   </tbody>
    // </table>
  );
};

export default QuizThreeResultTable;
