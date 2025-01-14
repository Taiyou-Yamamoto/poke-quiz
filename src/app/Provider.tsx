'use Client';
import React, { ReactNode, useContext, useState } from 'react';
import { createContext } from 'react';

type Props = {
  children: ReactNode;
};
const Provider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const controlCries = {
    Cries: [], //音声データのの配列
    count: 0, //Criesのどのindexの音声を鳴らすか
    isPlaying: true, //音声が再生中か
  };
  const ControlCriesContext = createContext(controlCries);

  return (
    <ControlCriesContext.Provider value={controlCries}>
      {children}
    </ControlCriesContext.Provider>
  );
};

export default Provider;
