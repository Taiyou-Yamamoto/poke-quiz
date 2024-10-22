import React from 'react';
import { getAllPokemons } from '../poleApi';

const Page = async () => {
  const allPokemonDate = await getAllPokemons();
  return <div>{allPokemonDate}</div>;
};

export default Page;
NEXR;
