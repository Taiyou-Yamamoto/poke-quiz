'use client';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const XPost = ({ calculatedScore }: { calculatedScore: number }) => {
  const tweetContent = encodeURIComponent(
    `pokequizで${calculatedScore}を獲得しました！みんなもやってみよう！`
  );

  return (
    <a
      className='flex flex-row bg-black py-2 px-4 rounded-3xl justify-center items-center shadow-2xl'
      href={`https://twitter.com/intent/tweet?text=${tweetContent}&hashtags=PokeQuiz`}
      data-size='large'
    >
      <FontAwesomeIcon icon={faXTwitter} className='text-white mr-1' />
      <h1 className='text-white font-extrabold'>POST</h1>
    </a>
  );
};

export default XPost;
