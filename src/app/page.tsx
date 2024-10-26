import Image from 'next/image';
import Link from 'next/link';
import {
  getAllPokemonDetail,
  // createRandomPokemonData,
  getAllPokemonNameAndUrl,
  // getRandomPokemonDetailDate,
} from './utils/dataHandle';

export default async function Home() {
  const API_URL = process.env.NEXT_PUBLIC_POKEMON_API_URL;

  const allPokemonDate = await getAllPokemonNameAndUrl(API_URL ? API_URL : '');
  getAllPokemonDetail(allPokemonDate);
  // const hundredRandomPokemonDate = createRandomPokemonData(
  //   allPokemonDate.results
  // ).slice(0, 200);

  // const pokes = await getRandomPokemonDetailDate(hundredRandomPokemonDate);
  // console.error(pokes);

  return (
    <div className='w-full h-screen  bg-red-300 fixed'>
      <div className='absolute inset-0 z-0 opacity-85 flex flex-wrap'>
        {/* {pokes.map((poke, index) => {
          return (
            <div key={index}>
              <Image
                src={
                  poke.sprites.front_default ||
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
                }
                width={110}
                height={110}
                alt={poke.name}
              />
            </div>
          );
        })} */}
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
