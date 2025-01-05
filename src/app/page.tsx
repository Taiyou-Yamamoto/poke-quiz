import {
  getAllPokemonNameAndUrl,
  makeFiveImageArray,
} from './utils/dataHandle';
import MainContent from '../../features/Home/components/MainContent';
import Background from '../../features/Home/components/Background';
import Head from 'next/head';

export default async function Home() {
  const POKEMON_API_URL = process.env.NEXT_PUBLIC_POKEMON_API_URL;
  const ORIGINAL_API_URL =
    process.env.NEXT_PUBLIC_API_URL || // 環境変数が設定されている場合はこちらを使う
    `https://${process.env.VERCEL_URL}`;

  const allPokemonDate = await getAllPokemonNameAndUrl(POKEMON_API_URL!);

  // これでシャッフルされたデータを取ってくる
  // const shuffledTwoHundredData = await fetch(
  //   `${ORIGINAL_API_URL}/api/pokemon/random`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(allPokemonDate),
  //     next: { revalidate: 180 },
  //   }
  // );
  console.log(`https://${process.env.VERCEL_URL}`);
  // const shuffledSixtyData = await fetch(
  //   `${ORIGINAL_API_URL}/api/pokemon/random`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(allPokemonDate),
  //     next: { revalidate: 180 },
  //   }
  // );
  // if (!shuffledSixtyData.ok) {
  //   throw new Error(`API error: ${shuffledSixtyData.status}`);
  // }

  // const shuffledSixtyArray = await shuffledSixtyData.json();

  // if (!shuffledTwoHundredData || !shuffledTwoHundredData.ok) {
  //   console.error(
  //     'Fetch failed or response not OK:',
  //     shuffledTwoHundredData?.status,
  //     ORIGINAL_API_URL
  //   );
  //   throw new Error(`API error: ${shuffledTwoHundredData?.status}`);
  // }
  // const imageArray = getFiftyPokemonDetailDate(shuffledSixtyArray);
  // console.log('API Request URL:', `${ORIGINAL_API_URL}/api/pokemon/random`);
  // console.log('Request Body:', allPokemonDate);
  // console.log('Response Status:', shuffledSixtyData.status);
  // console.log('imageArray', shuffledSixtyArray);
  // const fiveImages = makeFiveImageArray(shuffledSixtyArray);
  return (
    <>
      <Head>
        <title>Poke-Quiz</title>
        <meta property='og:title' content='Poke-Quiz' />
        <meta
          property='og:description'
          content='ポケモンの名前を当てるクイズ。問題の種類は３っつ。目指せポケモンマスター!'
        />
        <meta
          property='og:image'
          content='https://localhost:3000/background/A97CCB17-E670-41E7-8D99-777C73E69C69_1_201_a.jpeg'
        />
        <meta property='og:url' content='http://localhost:3000' />
        <meta
          name='twitter:card'
          content='https://localhost:3000/background/A97CCB17-E670-41E7-8D99-777C73E69C69_1_201_a.jpeg'
        />
        <meta name='twitter:title' content='Poke-Quiz' />
        <meta
          name='twitter:description'
          content='クイズを解いて高スコアを目指せ！君がポケモンマスターだ！'
        />
        <meta
          name='twitter:image'
          content='https://localhost:3000/background/A97CCB17-E670-41E7-8D99-777C73E69C69_1_201_a.jpeg'
        />
      </Head>
      <div className='w-full h-screen  bg-red-300 fixed'>
        {/* <Background fiveImages={fiveImages} /> */}
        <MainContent />
      </div>
    </>
  );
}
