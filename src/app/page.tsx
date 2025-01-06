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

  const shuffledSixtyArray = [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10054.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10226.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10105.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10136.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10116.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10276.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10066.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10213.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10038.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10039.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10223.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png',
  ];

  try {
    const shuffledSixtyData = await fetch(
      `${ORIGINAL_API_URL}/api/pokemon/random`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(allPokemonDate),
        next: { revalidate: 180 },
      }
    );
    if (!shuffledSixtyData.ok) {
      throw new Error(`API error: ${shuffledSixtyData.status}`);
    }

    const shuffledSixtyArray = await shuffledSixtyData.json();
  } catch (error) {
    // if (!shuffledTwoHundredData || !shuffledTwoHundredData.ok) {
    //   console.error(
    //     'Fetch failed or response not OK:',
    //     shuffledTwoHundredData?.status,
    //     ORIGINAL_API_URL
    //   );
    //   throw new Error(`API error: ${shuffledTwoHundredData?.status}`);
    // }
    // const imageArray = getFiftyPokemonDetailDate(shuffledSixtyArray);

    console.log(`https://${process.env.VERCEL_URL}`);
    console.log('API Request URL:', `${ORIGINAL_API_URL}/api/pokemon/random`);
    // console.log('Request Body:', allPokemonDate);
    // console.log('Response Status:', shuffledSixtyData.status);
    console.log('imageArray', shuffledSixtyArray);
  }
  const fiveImages = makeFiveImageArray(shuffledSixtyArray);
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
        <Background fiveImages={fiveImages} />
        <MainContent />
      </div>
    </>
  );
}
