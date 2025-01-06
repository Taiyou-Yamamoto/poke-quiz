import {
  getAllPokemonNameAndUrl,
  getFiftyAllPokemonDetail,
  getShuffledSixtyData,
  makeFiveImageArray,
} from './utils/dataHandle';
import MainContent from '../../features/Home/components/MainContent';
import Background from '../../features/Home/components/Background';
import Head from 'next/head';
import { ImageArray } from '@/app/type';

export default async function Home() {
  const POKEMON_API_URL = process.env.NEXT_PUBLIC_POKEMON_API_URL;
  const ORIGINAL_API_URL =
    process.env.NEXT_PUBLIC_API_URL || // 環境変数が設定されている場合はこちらを使う
    `https://${process.env.VERCEL_URL}`; //こちらは本番環境用

  // SSGで1302匹分のポケモンの名前とURLを取得
  const allPokemonDate = await getAllPokemonNameAndUrl(POKEMON_API_URL!);

  // 3分ごとにデータをシャッフルして取得
  const shuffledData = await getShuffledSixtyData(
    `${ORIGINAL_API_URL}api`,
    allPokemonDate
  );

  // ５０匹の画像データを取得
  const imageArray = await getFiftyAllPokemonDetail(shuffledData);

  // const shuffledSixtyArray = [
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10147.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1021.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1019.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10012.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10028.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png',
  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10261.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10272.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10232.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png',
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png',
  // ];

  // try {
  //   console.log('ORIGINAL_API_URL', ORIGINAL_API_URL);

  //   const shuffledSixtyData = await fetch({ cache: 'force-cache' });
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

  // } catch (error) {

  // if (!shuffledTwoHundredData || !shuffledTwoHundredData.ok) {
  //   console.error(
  //     'Fetch failed or response not OK:',
  //     shuffledTwoHundredData?.status,
  //     ORIGINAL_API_URL
  //   );
  //   throw new Error(`API error: ${shuffledTwoHundredData?.status}`);
  // }
  // const imageArray = getFiftyPokemonDetailDate(shuffledSixtyArray);

  // console.log(`https://${process.env.VERCEL_URL}`);
  // console.log('API Request URL:', `${ORIGINAL_API_URL}/api/pokemon/random`);
  // console.log('Request Body:', allPokemonDate);
  // console.log('Response Status:', shuffledSixtyData.status);
  // console.log('imageArray', shuffledSixtyArray);

  const fiveImages = makeFiveImageArray(imageArray);
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
