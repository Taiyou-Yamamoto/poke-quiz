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
    const res = await fetch(url, { cache: 'force-cache' }); //ビルド時のキャッシュの利用を明示

    if (!res.ok) {
      throw new Error('response is not ok');
    }
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log('Error in getAllPokemonNameAndUrl:', error);
  }
  return [];
};

// 昇順だったポケモン詳細配列をランダムに並び替えする配列
// Fisher-Yates Shuffleというアルゴリズムを使用している
// それを使うとspliceや古い配列の要素を削除しなくて済むので効率的らしい
export const createRandomPokemonData = (array: any[]): any[] => {
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

//ポケモンの詳細データを取得する関数
export const fetchPokemonDetails = async (url: string): Promise<any | null> => {
  try {
    const res = await fetch(url, { cache: 'force-cache' });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error(`Failed to fetch data for ${url}`, error);
  }
};

// 利用可能な画像を任意の数持っているポケモンか選別し特定の処理を行う
export const ImageFilter = async (PokemonUrl: string, callback: any) => {
  const data = await fetchPokemonDetails(PokemonUrl);
  if (
    data.sprites.front_default &&
    !excludedUrls.includes(data.sprites.front_default)
  ) {
    return callback(data);
  } // 無効な場合は null を返す
};

// 任意の処理がされたデータを任意の数取得
export const getCustomPokemonData = async (
  randomArray: Pokemon[], //事前にシャッフルされた配列
  count: number, //取得する数
  callback: any //任意の処理
) => {
  const DataArray: any[] = [];

  try {
    for (const pokemon of randomArray) {
      const data = await ImageFilter(pokemon.url, callback);
      if (data) {
        DataArray.push(data);
      }
      if (DataArray.length >= count) {
        break;
      }
    }
  } catch (error) {
    console.error('Error in getFiftyAllPokemonDetail:', error);
  }

  return DataArray;
};

//画像データのみ取得
export const getOnlyImage = async (data: any) => {
  return data.sprites.front_default;
};

// 画像データと日本語名を取得
export const getImageAndJPName = async (data: any) => {};

// 画像データと日本語名と鳴き声を取得
export const getImageAndJPNameAndCries = async (data: any) => {};

// 画像データと日本語名とテキストを取得
export const getImageAndJPNameAndText = async (data: any) => {};

// 3分ごとにデータをシャッフル
export const getShuffledFiftyData = async (url: string, array: Pokemon[]) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(array),
    next: { revalidate: 180 },
  });

  if (!res.ok) {
    throw new Error(
      `Fetch failed with status ${res.status}: ${res.statusText}`
    );
  }
  console.log(res);

  const data = await res.json();

  return data;
};

// ５つの配列に分割
export const makeFiveImageArray = (imageArray: string[]) => {
  const array = [];

  for (let i = 0; i <= 50; i += 10) {
    array.push(imageArray.slice(i, i + 10));
  }

  return array;
};
