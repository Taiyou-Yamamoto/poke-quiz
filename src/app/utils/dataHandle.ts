import { Pokemon } from '../type';

export const createRandomPokemonData = (array: Pokemon[]): Pokemon[] => {
  // ここではFisher-Yates Shuffleというアルゴリズムを使用している
  // それを使うとspliceや古い配列の要素を削除しなくて済むので効率的らしい

  // 配列の最後の要素とランダムで決められたインデックスをarray.length回交換し続ける
  for (let i = array.length; i >= 0; i--) {
    //length以内のランダムな値を生成
    const randomNum = Math.floor(Math.random() * (i + 1));
    //取り出した値と箱の外の先頭の値を交換する
    [array[i], array[randomNum]] = [array[randomNum], array[i]];
  }
  //  ランダムにシャッフルされた配列の0~99の配列を返す。
  if (!Array.isArray(array)) {
    throw new Error('arrayじゃない');
  }
  return array;
};

// 100の各ポケモンの画像データを取得
export const getRandomPokemonDetailDate = async (
  array: Pokemon[]
): Promise<any[]> => {
  const eachData = [];
  for (let i = 0; i <= 99; ++i) {
    try {
      const url = array[i].url;

      const eachPokemonRes = await fetch(`${url}`, { cache: 'no-store' });

      const eachPokemonData = await eachPokemonRes.json();

      eachData.push(eachPokemonData);
    } catch (error) {
      // ポケモンによってurlがない場合があるので、その場合スキップ
      continue;
    }
  }
  return eachData;
};
