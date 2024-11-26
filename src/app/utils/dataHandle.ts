import { Pokemon } from '../type';
import { excludedUrls } from './exclidedUrls';

// 1302匹ぶんのnameとurlをSSGで取得
export const getAllPokemonNameAndUrl = async (
  url: string
): Promise<Pokemon[]> => {
  if (url == '') {
    throw new Error('URLが提供されていません');
  }

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('resが帰ってきてません');
    }
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('データ取得エラー:', error);
    throw error;
  }
};

// 上の関数から撮ってきた1302匹分のurlをfetchし、配列にして返す
export const getAllPokemonDetail = async (array: Pokemon[]) => {
  const detailDatas = array.map(async (pokemon) => {
    const res = await fetch(pokemon.url);
    return res.json();
  });

  const detailArray = await Promise.all(detailDatas);

  return detailArray;
};

// 昇順だったポケモン詳細配列をランダムに並び替えする配列
export const createRandomPokemonData = (array: any[]): any[] => {
  // ここではFisher-Yates Shuffleというアルゴリズムを使用している
  // それを使うとspliceや古い配列の要素を削除しなくて済むので効率的らしい

  // 配列の最後の要素とランダムで決められたインデックスをarray.length回交換し続ける
  for (let i = array.length - 1; i >= 0; i--) {
    //length以内のランダムな値を生成
    const randomNum = Math.floor(Math.random() * (i + 1));

    [array[i], array[randomNum]] = [array[randomNum], array[i]];
  }
  //  ランダムにシャッフルされた配列の0~99の配列を返す。
  if (!Array.isArray(array)) {
    throw new Error('arrayじゃない');
  }
  return array;
};

// // 200の各ポケモンの画像データを取得
export const getTwoHundredPokemonDetailDate = (array: any[]): any[] => {
  const eachData = [];

  let i = 0;
  while (eachData.length < 10) {
    try {
      const url = array[i].sprites.front_default;

      if (!url || excludedUrls.includes(url)) {
        ++i;
        continue;
      }

      eachData.push(url);
    } catch (error) {
      // ポケモンによってurlがない場合があるので、その場合スキップ
      continue;
    }

    ++i;
  }

  return eachData;
};
