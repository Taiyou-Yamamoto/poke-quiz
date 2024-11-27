import React, { useState } from 'react';
import {
  createRandomPokemonData,
  getAllPokemonNameAndUrl,
} from '../utils/dataHandle';
import { excludedUrls } from '../utils/exclidedUrls';
import QuizMain from '../../../features/quiz/components/QuizMain';

const Page = async () => {
  // 修正必須
  const quizArray = [];

  const POKEMON_API_URL = process.env.NEXT_PUBLIC_POKEMON_API_URL;

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
  console.log(detailArray);
  // console.log('サーバーから渡されたdetailArray:', detailArray);
  // console.log('detailArrayの参照:', JSON.stringify(detailArray));

  // 以上のデータを元に10匹分のデータを取得する。初めに画像データより10匹を選別
  for (let i = 0; quizArray.length < 10; ++i) {
    const imageData = detailArray[i].sprites.front_default;
    if (!imageData || excludedUrls.includes(imageData)) {
      continue;
    }
    const pokemonSpecies = await fetch(detailArray[i].species.url);
    const pokemonName = await pokemonSpecies.json();

    const pokemonJpName = pokemonName.names[0].name;

    // quizArrayはresult画面でも活用
    quizArray.push({
      image: imageData,
      name: pokemonJpName,
    });
  }

  return <QuizMain quizArray={quizArray} detailArray={detailArray} />;
};

export default Page;
