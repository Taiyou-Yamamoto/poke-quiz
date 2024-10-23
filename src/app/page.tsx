import Image from 'next/image';
import Link from 'next/link';
import { getRandom100PokemonData } from './utils/dataHandle';

export default async function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const data = await fetch(`${API_URL}/api/pokemon/all`);
  const allPokemonDate = await data.json();
  const randomPokemonDate = getRandom100PokemonData(
    allPokemonDate.results
  ).slice(0, 100);
  // console.log(randomPokemonDate);

  return (
    <div className='w-full h-screen bg-red-300 flex flex-col justify-center items-center'>
      <div className=''>
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
        className='text-white font-PokeFont shadow-2xl active:shadow-none py-2 px-4 font-black rounded-md border-solid border-4 border-blue-700 bg-yellow-400 '
      >
        スタート！
      </Link>
      {randomPokemonDate.map((pokemon) => {
        return <div>{}</div>;
      })}
    </div>
  );
}
