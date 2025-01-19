import { RankingProps } from '@/app/utils/type';
import React, { useEffect } from 'react';

const Ranking = ({ rankData, quizId }: RankingProps) => {
  useEffect(() => {}, [rankData]);
  return (
    <div className='font-DotJP h-full w-full my-3 text-4xl font-extrabold '>
      <div className='mb-1 sm:mb-5 text-xl sm:text-3xl mx-auto text-center gray-shadow'>
        {quizId === 1
          ? 'モンスターレベル'
          : quizId === 2
          ? 'スーパーレベル'
          : 'ハイパーレベル'}
      </div>
      <ul className='flex-col text-xl sm:text-3xl items-center justify-center'>
        {rankData.map((item, index) => (
          <li
            key={index}
            className={
              index == 0
                ? 'flex items-center justify-between w-full py-1 !font-black bg-gradient-to-t from-[#e4b255] to-[#ffe138] shine-text gold-shadow bg-clip-text text-transparent'
                : index == 1
                ? 'flex items-center justify-between w-full py-1 !font-black bg-gradient-to-t from-[#888888] to-[#ebebeb]  bg-clip-text text-transparent'
                : index == 2
                ? 'flex items-center justify-between w-full py-1 !font-black bg-gradient-to-t from-[#a48255] to-[#ff9d5f]  bg-clip-text text-transparent'
                : 'flex items-center justify-between w-full py-1 !font-black  gray-shadow text-black'
            }
          >
            <span className={'flex-shrink-0 w-[5rem] text-right'}>
              {index + 1}位:
            </span>
            <span className='ml-3 text-center w-full '>
              {item.score ? item.score : '--------'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
