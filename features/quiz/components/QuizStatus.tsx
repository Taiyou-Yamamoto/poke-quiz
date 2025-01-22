// import { QuizStatusProps } from '@/app/utils/type';
// import React from 'react';

// const QuizStatus = ({ second, count, quiz_id }: QuizStatusProps) => {
//   return (
//     <>
//       <div className='h-[4rem] text-2xl text-white gray-shadow'>
//         残り
//         <span
//           className={second < 11 ? 'text-red-600 font-PokeGB' : 'font-PokeGB'}
//         >
//           {second}
//         </span>
//         秒
//       </div>
//       <div className='flex flex-col gap-4 justify-center items-center'>
//         <h1 className='flex font-PokeGB text-3xl text-white font-extrabold gray-shadow '>
//           {count + 1}問目
//         </h1>
//         {quiz_id == 1 ? (
//           <h2 className='w-4/5 text-3xl text-white  font-extrabold gray-shadow'>
//             このポケモンの名前は？
//           </h2>
//         ) : quiz_id == 2 ? (
//           <h2 className='w-4/5 text-3xl text-white  font-extrabold gray-shadow'>
//             これはどのポケモンの鳴き声？
//           </h2>
//         ) : (
//           <h2 className='w-4/5 text-3xl text-white  font-extrabold gray-shadow'>
//             これはどのポケモンの図鑑説明？
//           </h2>
//         )}
//       </div>
//     </>
//   );
// };

// export default QuizStatus;
