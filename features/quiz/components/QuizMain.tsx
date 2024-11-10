'use client';
import React, { useEffect, useState } from 'react';
import QuizImage from './QuizImage';
import Input from './Input';
import { Quiz, quizArrayProps } from '@/app/type';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const QuizMain = ({ quizArray, detailArray }: quizArrayProps) => {
  const router = useRouter();
  const [count, setCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [yourResult, setYourResult] = useState<string[]>([]);

  const goToHome = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setScore(0);
    setCount(0);
    router.push('/');
    router.refresh();
  };

  let resultMessage;
  if (score > 8) {
    resultMessage = <div>すごいぞ！君はオーキド博士級だ！</div>;
  } else if (score > 5) {
    resultMessage = <div>やったね！君はエリートトレーナー級だ！</div>;
  } else {
    resultMessage = <div>がんばれ！君は虫取り少年級だ！</div>;
  }

  useEffect(() => {
    if (count > 9) {
      const resultUrl = score > 5 ? '/result_high' : '/result_low';
      // 検索パラメータを変更しBGMを変更
      window.history.replaceState(null, '', resultUrl);
    }
  }, [count, score]);

  console.log('クイズ', quizArray);
  console.log('詳細', detailArray);
  console.log('yourResult', yourResult);

  return (
    <div className='bg-red-300 w-full'>
      <div className='py-11'>
        {' '}
        {count > 9 ? (
          <div className=' w-full flex flex-col justify-center items-center bg-red-300'>
            <h1 className='font-PokeGB text-3xl text-white font-extrabold gray-shadow mb-11'>
              スコア: {score}/10
            </h1>
            <div className='font-PokeGB text-3xl text-white font-extrabold gray-shadow'>
              {resultMessage}
            </div>
            <table className=''>
              <thead>
                <tr>
                  <th></th>
                  <th colSpan={2}>答え</th>
                  <th colSpan={2}>あなたの回答</th>
                  <th></th>
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
                        <h3 className='text-white gray-shadow font-extrabold text-2xl'>
                          {pokemon.name}
                        </h3>
                      </td>
                      <td>
                        <h3 className='text-white gray-shadow  font-extrabold text-2xl'>
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
            <form onSubmit={goToHome} className=''>
              <button
                type='submit'
                className='bg-yellow-300 gray-shadow return-button max-w-[150px] font-extrabold font-PokeGB text-white py-2 px-4 rounded-md border-solid border-4 mt-4 ring-4 shadow-2xl active:shadow-none'
              >
                戻る
              </button>
            </form>
          </div>
        ) : (
          <div className=' min-h-screen w-full flex flex-col justify-center items-center'>
            {/* あとで背景として使う */}
            {/* <video
            autoPlay
            muted
            loop
            className='absolute inset-0 w-full h-full object-cover'
          >
            <source src='/background/モンスターボール風.mp4' type='video/mp4' />
          </video> */}
            <div className='flex flex-col gap-4'>
              <h1 className='flex font-PokeGB text-3xl text-white font-extrabold gray-shadow justify-center items-center'>
                {count + 1}問目
              </h1>
              <h2 className='font-PokeHira text-3xl text-white  font-extrabold gray-shadow'>
                ポケモ
              </h2>
            </div>

            <QuizImage image={quizArray[count].image} />
            <Input
              PokemonName={quizArray[count].name}
              setCount={setCount}
              setScore={setScore}
              setYourResult={setYourResult}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizMain;
