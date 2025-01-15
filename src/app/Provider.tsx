'use client';
import React, { ReactNode, useState } from 'react';
import { createContext } from 'react';

type Props = {
  children: ReactNode;
};

type ControlCriesContextType = {
  cry: string; //音声データの配列
  setCry: React.Dispatch<React.SetStateAction<string>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ControlCriesContext = createContext<
  ControlCriesContextType | undefined
>(undefined);

//このProviderがHeaderとQuiz2での音声情報の受け渡しを担う
const Provider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [cry, setCry] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  //コンテキストに情報を登録
  const controlCries = {
    cry, //音声データのの配列
    setCry, //criesの更新関数
    index,
    setIndex, //Criesのどのindexの音声を鳴らすか
    isPlaying, //音声が再生中か
    setIsPlaying,
  };

  return (
    <ControlCriesContext.Provider value={controlCries}>
      {children}
    </ControlCriesContext.Provider>
  );
};

export default Provider;
