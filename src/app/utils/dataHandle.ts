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
    throw error;
  }
};

// ランダムな1302匹分のurlを50匹に絞り,fetchし、配列にして返す
export const getFiftyAllPokemonDetail = async (array: Pokemon[]) => {
  const twentyPokemo = array.slice(0, 50);
  const detailDatas = twentyPokemo.map(async (pokemon) => {
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
    throw new Error('エラーを検知');
  }
  return array;
};

// // 200の各ポケモンの画像データを取得
export const getFiftyPokemonDetailDate = (array: any[]): any[] => {
  const eachData: string[] = [];

  let i = 0;
  while (i < array.length) {
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

export const makeFiveImageArray = (imageArray: string[]) => {
  const array = [];

  for (let i = 0; i <= 50; i += 10) {
    array.push(imageArray.slice(i, i + 10));
  }

  return array;
};
