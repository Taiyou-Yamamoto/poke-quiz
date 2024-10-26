import { Pokemon } from '../type';

export const getAllPokemonNameAndUrl = async (
  url: string
): Promise<Pokemon[]> => {
  if (url == '') {
    throw new Error('URLが提供されていません');
  }

  try {
    const res = await fetch(url);
    return res.json();

    if (!res.ok) {
      throw new Error('resが帰ってきてません');
    }
    return res.json();
  } catch (error) {
    console.error('データ取得エラー:', error);
    throw error;
  }
};

export const getAllPokemonDetail = async (array: Pokemon[]) => {
  let detailData: any[] = [];
  for (let i = 0; i >= array.length; ++i) {
    let url = array[i].url;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
  }
};

// export const createRandomPokemonData = (array: Pokemon[]): Pokemon[] => {
//   // ここではFisher-Yates Shuffleというアルゴリズムを使用している
//   // それを使うとspliceや古い配列の要素を削除しなくて済むので効率的らしい

//   // 配列の最後の要素とランダムで決められたインデックスをarray.length回交換し続ける
//   for (let i = array.length; i >= 0; i--) {
//     //length以内のランダムな値を生成
//     const randomNum = Math.floor(Math.random() * (i + 1));

//     [array[i], array[randomNum]] = [array[randomNum], array[i]];
//   }
//   //  ランダムにシャッフルされた配列の0~99の配列を返す。
//   if (!Array.isArray(array)) {
//     throw new Error('arrayじゃない');
//   }
//   return array;
// };

// // 100の各ポケモンの画像データを取得
// export const getRandomPokemonDetailDate = async (
//   array: Pokemon[]
// ): Promise<any[]> => {
//   const eachData = [];
//   for (let i = 0; i <= 199; ++i) {
//     try {
//       const url = array[i].url;

//       const eachPokemonRes = await fetch(`${url}`);

//       const eachPokemonData = await eachPokemonRes.json();

//       eachData.push(eachPokemonData);
//     } catch (error) {
//       // ポケモンによってurlがない場合があるので、その場合スキップ
//       continue;
//     }
//   }
//   return eachData;
// };
