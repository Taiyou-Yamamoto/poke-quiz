export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonImage = {
  image: string;
};
export type InputProps = {
  PokemonName: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setYourResult: React.Dispatch<React.SetStateAction<string[]>>;
};

export type Quiz = {
  image: string;
  name: string;
};

export type quizArrayProps = {
  quizArray: Quiz[];
  detailArray: any[];
};

export type scoreCalculateProps = {
  score: number;
  second: number;
  calculatedScore: number;
  setCalculatedScore: React.Dispatch<React.SetStateAction<number>>;
};
