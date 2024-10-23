import { Pokemon } from '../type';

export const getRandom100PokemonData = (array: Pokemon[]): Pokemon[] => {
  // ここではFisher-Yates Shuffleというアルゴリズムを使用している
  // それをを使うとspliceや古い配列の要素を削除しなくて済むので効率的らしい
  //　取り出す範囲(箱の中)を末尾から狭める繰り返し

  // 配列の最後の要素とランダムで決められたインデックスをarray.length回交換し続ける
  for (let i = array.length; i >= 0; i--) {
    //length以内のランダムな値を生成
    const randomNum = Math.floor(Math.random() * (i + 1));
    //取り出した値と箱の外の先頭の値を交換する
    [array[i], array[randomNum]] = [array[randomNum], array[i]];
  }
  //  ランダムにシャッフルされた配列の0~99の配列を返す。
  //   const newArray = array.slice(0, 100);
  if (!Array.isArray(array)) {
    throw new Error('arrayじゃない');
  }
  return array;
};
