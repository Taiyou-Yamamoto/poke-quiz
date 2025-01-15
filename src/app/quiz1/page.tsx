import React from 'react';
import {
  createRandomPokemonData,
  getAllPokemonNameAndUrl,
  getCustomPokemonData,
  getImage_JPName,
} from '../utils/dataHandle';
import QuizMain from '../../../features/quiz/components/QuizMain';

const Page = async () => {
  const POKEMON_API_URL = process.env.NEXT_PUBLIC_POKEMON_API_URL;
  const quiz_id = 1;

  // 1302匹ぶんのnameとurlをSSGで取得
  const allPokemonDate = await getAllPokemonNameAndUrl(POKEMON_API_URL!);

  // 昇順だったポケモン詳細配列をランダムに並び替えする配列
  const shuffledData = createRandomPokemonData(allPokemonDate);

  // 1０匹の日本語名と画像データを取得
  const Image_JPName = await getCustomPokemonData(
    shuffledData,
    10,
    getImage_JPName
  );

  const quizArray = Image_JPName;
  return (
    <>
      <QuizMain quizArray={quizArray} quiz_id={quiz_id} />
    </>
  );
};

export default Page;
