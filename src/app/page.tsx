import Image from 'next/image';
import {
  getAllPokemonNameAndUrl,
  getTwoHundredPokemonDetailDate,
} from './utils/dataHandle';
import MainContent from '../../features/Home/components/MainContent';

export default async function Home() {
  const POKEMON_API_URL = process.env.NEXT_PUBLIC_POKEMON_API_URL;
  const ORIGINAL_API_URL = process.env.NEXT_PUBLIC_API_URL;

  const allPokemonDate = await getAllPokemonNameAndUrl(POKEMON_API_URL!);

  // これでシャッフルされたデータを取ってくる
  const shuffledTwoHundredData = await fetch(
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

  if (!shuffledTwoHundredData.ok) {
    throw new Error(`API error: ${shuffledTwoHundredData.status}`);
  }
  const shuffledTwoHundredArray = await shuffledTwoHundredData.json();
  const imageArray = getTwoHundredPokemonDetailDate(shuffledTwoHundredArray);

  return (
    <>
      <div className='w-full h-screen  bg-red-300 fixed'>
        <div className='absolute inset-0 z-0 opacity-85 flex flex-wrap'>
          {imageArray.map((pokemonUrl: string, index: number) => {
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
        <MainContent />
      </div>
    </>
  );
}
