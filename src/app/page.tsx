import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='w-full h-screen bg-red-400 flex flex-col justify-center items-center'>
      <div className=''>
        <Image
          className='animate-chime mx-auto'
          src='/images/Poke-quiz.png'
          alt='My Image'
          layout='responsive'
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
    </div>
  );
}
