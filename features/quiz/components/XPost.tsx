'use client';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const XPost = () => {
  return (
    <a
      className='flex flex-row bg-black py-2 px-4 rounded-3xl justify-center items-center shadow-2xl'
      href='https://twitter.com/intent/tweet?text=Hello%20world'
      data-size='large'
    >
      <FontAwesomeIcon icon={faXTwitter} className='text-white' />
      <h1 className='text-white font-extrabold'>POST</h1>
    </a>
  );
};

export default XPost;
