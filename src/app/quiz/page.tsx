import Image from 'next/image';
import React, { useState } from 'react';
import AnswerButtons from '../../../features/quiz/components/AnswerButtons';
import QuizImage from '../../../features/quiz/components/QuizImage';
import {
  createRandomPokemonData,
  getAllPokemonNameAndUrl,
} from '../utils/dataHandle';
import Input from '../../../features/quiz/components/Input';
import Battle from '../utils/battle';

const Page = async () => {
  const [score, setScore] = useState<number>(0);
  const i: number = 0;

  const POKEMON_API_URL = process.env.NEXT_PUBLIC_POKEMON_API_URL;
  const ORIGINAL_API_URL = process.env.NEXT_PUBLIC_API_URL;
  const allPokemonDate = await getAllPokemonNameAndUrl(POKEMON_API_URL!);
  const shuffledData = createRandomPokemonData(allPokemonDate);
  const quizData = shuffledData.slice(0, 9);
  const quizDetailData = quizData.map(async (pokemon) => {
    const res = await fetch(quizData[0].url, {
      cache: 'no-store',
    });
    return res.json();
  });

  const detailArray = await Promise.all(quizDetailData);

  const nameRes = await fetch(detailArray[i].species.url);
  const nameData = await nameRes.json();

  console.log(nameData.names[0].name);

  return (
    <>
      <Battle />
      <div className='bg-red-300 min-h-screen w-full flex flex-col justify-center items-center'>
        <h1 className='font-PokeGB text-3xl text-white font-extrabold my-14 gray-shadow'>
          このポケモンの名前は？
        </h1>
        <div className='p-10 mb-7 bg-white border-8 rounded shadow-2xl'>
          <QuizImage image={detailArray[i].sprites.front_default} />
        </div>
        <Input PokemonName={nameData.names[0].name} setScore={setScore} />
      </div>
    </>
  );
};

export default Page;
