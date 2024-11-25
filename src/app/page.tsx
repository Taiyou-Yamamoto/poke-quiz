import Image from 'next/image';
import Link from 'next/link';
import {
  getAllPokemonDetail,
  getAllPokemonNameAndUrl,
} from './utils/dataHandle';

export default async function Home() {
  const POKEMON_API_URL = process.env.NEXT_PUBLIC_POKEMON_API_URL;
  const ORIGINAL_API_URL = process.env.NEXT_PUBLIC_API_URL;

  const allPokemonDate = await getAllPokemonNameAndUrl(POKEMON_API_URL!);
  const allPokemonDetail = await getAllPokemonDetail(allPokemonDate);

  // デプロイ後変更が必要だ
  // これでシャッフルされたデータを取ってくる
  const shuffledTwoHundredData = await fetch(
    `${ORIGINAL_API_URL}/api/pokemon/random`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(allPokemonDetail.slice(0, 50)),
      next: { revalidate: 180 },
    }
  );

  if (!shuffledTwoHundredData.ok) {
    throw new Error(`API error: ${shuffledTwoHundredData.status}`);
  }
  const shuffledTwoHundredArray = await shuffledTwoHundredData.json();
  console.log(shuffledTwoHundredArray);

  // const res = getAllArticles = async():Promise<any[]> => {
  //   const
  // }

  return (
    <>
      <div className='w-full h-screen  bg-red-300 fixed'>
        <div className='absolute inset-0 z-0 opacity-85 flex flex-wrap'>
          {shuffledTwoHundredArray.map((pokemonUrl: string, index: number) => {
            return (
              <div key={index}>
                <Image
                  className='w-auto h-auto'
                  src={pokemonUrl}
                  width={300}
                  height={300}
                  alt={String(index)}
                  priority
                />
              </div>
            );
          })}
        </div>

        <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
          <div className='fade-in'>
            <Image
              className='animate-chime mx-auto w-auto h-auto'
              src='/images/Poke-quiz.png'
              alt='My Image'
              width={500}
              height={300}
            />
          </div>
          <Link
            href='/quiz'
            className='w-[10rem] mx-auto font-DotJP gray-shadow hover:animate-shake font-extrabold text-white shadow-2xl active:shadow-none py-2 px-4 rounded-md border-solid border-4 bg-red-600 border-white mt-4 ring-offset-2 ring-4'
          >
            モンスタ-レベル
          </Link>
          <Link
            href='/quiz2'
            className='w-[10rem] mx-auto font-DotJP hover:animate-shake font-extrabold text-white shadow-2xl active:shadow-none py-2 px-4 pl-6 rounded-md border-solid border-4 border-red-600 bg-blue-500 mt-4 ring-offset-2 ring-4'
          >
            スーパ-レベル
          </Link>
          <Link
            href='/quiz3'
            className='w-[10rem] mx-auto font-DotJP hover:animate-shake font-extrabold text-white shadow-2xl active:shadow-none py-2 px-4 pl-6 rounded-md border-solid border-4 border-yellow-400 bg-gray-700 mt-4 ring-offset-2 ring-4'
          >
            ハイパーレベル
          </Link>
        </div>
      </div>
    </>
  );
}
