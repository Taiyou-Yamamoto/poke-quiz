import { Pokemon } from '../type';
import { excludedUrls } from './exclidedUrls';

// 1302匹ぶんのnameとurlをSSGで取得
// 使った
export const getAllPokemonNameAndUrl = async (
  url: string
): Promise<Pokemon[]> => {
  if (url == '') {
    throw new Error('URLが提供されていません');
  }

  try {
    const res = await fetch(url, { cache: 'force-cache' }); //ビルド時のキャッシュの利用を明示

    if (!res.ok) {
      throw new Error('response is not ok');
    }
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Error in getAllPokemonNameAndUrl:', error);
  }
  return [];
};

// 昇順だったポケモン詳細配列をランダムに並び替えする配列
// 使った
export const createRandomPokemonData = (array: any[]): any[] => {
  // ここではFisher-Yates Shuffleというアルゴリズムを使用している
  // それを使うとspliceや古い配列の要素を削除しなくて済むので効率的らしい

  // 配列の最後の要素とランダムで決められたインデックスをarray.length回交換し続ける
  for (let i = array.length - 1; i >= 0; i--) {
    //length以内のランダムな値を生成
    const randomNum = Math.floor(Math.random() * (i + 1));

    [array[i], array[randomNum]] = [array[randomNum], array[i]];
  }

  if (!Array.isArray(array)) {
    throw new Error('エラーを検知');
  }
  return array;
};

// ランダムな1302匹分のurlを50匹に絞り,fetchし、配列にして返す
export const getFiftyAllPokemonDetail = async (array: Pokemon[]) => {
  const ImageArray: string[] = [];

  try {
    for (const pokemon of array) {
      const res = await fetch(pokemon.url, { cache: 'force-cache' });
      if (res.ok) {
        const data = await res.json();
        if (
          !data.sprites.front_default ||
          excludedUrls.includes(data.sprites.front_default)
        ) {
          continue;
        }

        ImageArray.push(data.sprites.front_default);
      }
      if (ImageArray.length >= 50) {
        break; // 必要な数が揃ったらループを終了
      }
    }
  } catch (error) {
    console.error('Error in getFiftyAllPokemonDetail:', error);
  }

  return ImageArray;
};
// 3分ごとにデータをシャッフル
export const getShuffledSixtyData = async (url: string, array: Pokemon[]) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(array),
    next: { revalidate: 180 },
  });

  const data = await res.json();

  return data;
};

export const makeFiveImageArray = (imageArray: string[]) => {
  const array = [];

  for (let i = 0; i <= 50; i += 10) {
    array.push(imageArray.slice(i, i + 10));
  }

  return array;
};
