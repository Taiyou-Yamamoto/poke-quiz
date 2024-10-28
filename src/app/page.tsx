import Image from 'next/image';
import Link from 'next/link';
import {
  getAllPokemonDetail,
  // createRandomPokemonData,
  getAllPokemonNameAndUrl,
  getTwoHundredPokemonDetailDate,
  // getRandomPokemonDetailDate,
} from './utils/dataHandle';

export default async function Home() {
  const POKEMON_API_URL = process.env.NEXT_PUBLIC_POKEMON_API_URL;
  const ORIGINAL_API_URL = process.env.NEXT_PUBLIC_API_URL;

  const allPokemonDate = await getAllPokemonNameAndUrl(
    POKEMON_API_URL ? POKEMON_API_URL : ''
  );
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
      body: JSON.stringify(allPokemonDetail),
      next: { revalidate: 2500 },
    }
  );

  if (!shuffledTwoHundredData.ok) {
    throw new Error(`API error: ${shuffledTwoHundredData.status}`);
  }
  const shuffledTwoHundredArray = await shuffledTwoHundredData.json();

  return (
    <div className='w-full h-screen  bg-red-300 fixed'>
      <div className='absolute inset-0 z-0 opacity-85 flex flex-wrap'>
        {shuffledTwoHundredArray.map((pokemonUrl: string, index: number) => {
          return (
            <div key={index}>
              <Image
                src={pokemonUrl}
                width={110}
                height={110}
                alt={String(index)}
              />
            </div>
          );
        })}
      </div>

      <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
        <div className='fade-in'>
          <Image
            className='animate-chime mx-auto'
            src='/images/Poke-quiz.png'
            alt='My Image'
            width={500}
            height={300}
          />
        </div>
        <Link
          href='/quiz'
          className='hover:animate-shake  text-white shadow-2xl active:shadow-none py-2 px-4 font-black rounded-md border-solid border-4 border-blue-700 bg-yellow-400 mt-4 ring-offset-2 ring-4'
        >
          スタート！
        </Link>
      </div>
    </div>
  );
}
