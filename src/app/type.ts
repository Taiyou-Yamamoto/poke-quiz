export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonImage = {
  image: string;
};
export type PokemonName = {
  PokemonName: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

export type Quiz = {
  image: string;
  name: string;
};

export type quizArrayProps = {
  quizArray: Quiz[];
};
