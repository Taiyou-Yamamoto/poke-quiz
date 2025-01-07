import { Pokemon } from '../type';
import { createRandomPokemonData, getAllPokemonNameAndUrl } from './dataHandle';

class QuizClass {
  allPokemonData: Pokemon[];
  quizArray: any[];
  detailArray: any[];

  constructor(allPokemonData: Pokemon[]) {
    this.allPokemonData = allPokemonData; //SSGで取得した1302匹分のデータ
    this.quizArray = [];
    this.detailArray = [];
  }

  //quizに使う20匹のデータを取得
  getRandomPokemonData = async () => {
    this.quizArray.push(
      createRandomPokemonData(this.allPokemonData).slice(0, 19)
    );

    // console.log('this.quizArray', this.quizArray);

    const quizDetailData = this.quizArray.map(async (pokemon) => {
      console.log('pokemon', pokemon);
      //   const res = await fetch(pokemon.url, { cache: 'no-store' });
      //   return res.json();
    });

    // const detailArray = await Promise.all(quizDetailData);
    // console.log(detailArray);
  };
}

export default QuizClass;
