import {
  getAllPokemonNameAndUrl,
  getShuffledFiftyData,
  makeFiveImageArray,
} from './utils/dataHandle';
import MainContent from '../../features/Home/components/MainContent';
import Background from '../../features/Home/components/HomeBackground';

export default async function Home() {
  const POKEMON_API_URL = process.env.NEXT_PUBLIC_POKEMON_API_URL;
  const ORIGINAL_API_URL =
    process.env.NEXT_PUBLIC_API_URL || // 環境変数が設定されている場合はこちらを使う
    `https://poke-quiz-git-main-taiyou-yamamotos-projects.vercel.app`;

  // SSGで1302匹分のポケモンの名前とURLを取得
  const allPokemonDate = await getAllPokemonNameAndUrl(POKEMON_API_URL!);

  // 3分ごとにデータをシャッフルして50匹のデータを取得
  const shuffledFiftyData = await getShuffledFiftyData(
    `${ORIGINAL_API_URL}/api/home`,
    allPokemonDate
  );
  // // ５つの配列に分割
  const fiveImages = makeFiveImageArray(shuffledFiftyData);
  return (
    <>
      <div>
        <div className='w-full h-screen  bg-red-300 fixed'>
          <Background fiveImages={fiveImages} />
          <MainContent />
        </div>
      </div>
    </>
  );
}
