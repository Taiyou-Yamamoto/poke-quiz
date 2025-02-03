export type Pokemon = {
  name: string;
  url: string;
};

export type InputProps = {
  PokemonName: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setYourResult: React.Dispatch<React.SetStateAction<string[]>>;
};

export type Quiz1 = {
  image: string;
  name: string;
};

export type QuizMainProps = {
  quizArray: quizObjects[];
  quiz_id: number;
};

export type quizArrayProps = {
  quizArray: Quiz1[];
  detailArray: any[];
  quiz_id: number;
};

export type quizMain = {
  quizArray: Quiz1[];
  quiz_id: number;
};
export type scoreCalculateProps = {
  count: number;
  score: number;
  second: number;
  calculatedScore: number;
  setCalculatedScore: React.Dispatch<React.SetStateAction<number>>;
};

export type QuizScore = {
  id?: number;
  quiz_id?: number;
  score: number;
  created_at?: string;
  updated_at?: string;
};

export type RankingProps = {
  rankData: QuizScore[]; // QuizScore[]型を明確に指定
  quizId: number;
};

export type RankData = {
  quiz1: QuizScore[];
  quiz2: QuizScore[];
  quiz3: QuizScore[];
};

export type ImageArray = {
  fiveImages: string[][];
};

export type QuizStatusProps = {
  second: number;
  count: number;
  quiz_id: number;
};

export type PokemonData = {
  image: string;
  name: string;
  cry?: string;
  text?: string | null;
};

export type quizObjects = {
  image: string;
  name: string;
  cry?: string;
  text?: string;
};
