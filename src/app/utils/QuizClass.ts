import { Pokemon } from '../type';
import { createRandomPokemonData, getAllPokemonNameAndUrl } from './dataHandle';
import { excludedUrls } from './exclidedUrls';

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
    this.quizArray = createRandomPokemonData(this.allPokemonData).slice(0, 19);

    const quizDetailData = this.quizArray.map(async (pokemon) => {
      const res = await fetch(pokemon.url, { cache: 'no-store' });
      return res.json();
    });

    console.log(this.quizArray);
    return await Promise.all(quizDetailData);
  };

  getImageAndJPName = async (quizDetailData: any[]) => {};

  // for (let i = 0; this.quizArray.length < 10; ++i) {
  //   const imageData = detailArray[i].sprites.front_default;
  //   if (!imageData || excludedUrls.includes(imageData)) {
  //     continue;
  //   }
  //   const pokemonSpecies = await fetch(detailArray[i].species.url);
  //   const pokemonName = await pokemonSpecies.json();

  //   const pokemonJpName = pokemonName.names[0].name;

  //   console.log(pokemonJpName);
  // quizArrayはresult画面でも活用
  //   this.quizArray.push({
  //     image: imageData,
  //     name: pokemonJpName,
  //   });
}

export default QuizClass;