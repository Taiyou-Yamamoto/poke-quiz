import React, { useState } from 'react';
import {
  createRandomPokemonData,
  getAllPokemonNameAndUrl,
} from '../utils/dataHandle';
import { excludedUrls } from '../utils/exclidedUrls';
import QuizMain from '../../../features/quiz/components/QuizMain';

const Page = async () => {
  const quizArray = [];

  const POKEMON_API_URL = process.env.NEXT_PUBLIC_POKEMON_API_URL;
  const ORIGINAL_API_URL = process.env.NEXT_PUBLIC_API_URL;

  // 必要
  const allPokemonDate = await getAllPokemonNameAndUrl(POKEMON_API_URL!);
  const shuffledData = createRandomPokemonData(allPokemonDate);

  // これはquizに必要な分のデータ
  const quizData = shuffledData.slice(0, 19);

  // そして20匹分のnameとurlのurlだけをfetchして詳細データを取得
  const quizDetailData = quizData.map(async (pokemon) => {
    const res = await fetch(pokemon.url, {
      cache: 'no-store',
    });
    return res.json();
  });
  // 全ての非同期が完了
  const detailArray = await Promise.all(quizDetailData);

  // 以上のデータを元に10匹分のデータを取得する。初めに画像データより10匹を選別
  for (let i = 0; quizArray.length < 10; ++i) {
    if (
      excludedUrls.includes(
        detailArray[i].sprites.front_default ||
          detailArray[i].sprites.front_default == null
      )
    ) {
      continue;
    }

    const imageData = detailArray[i].sprites.front_default;

    const pokemonSpecies = await fetch(detailArray[i].species.url);
    const pokemonName = await pokemonSpecies.json();

    const pokemonJpName = pokemonName.names[0].name;

    quizArray.push({
      image: imageData,
      name: pokemonJpName,
    });
  }

  const quiz_id = 2;

  return (
    <>
      <QuizMain
        quizArray={quizArray}
        detailArray={detailArray}
        quiz_id={quiz_id}
      />
    </>
  );
};

export default Page;
