import { excludedUrls } from './exclidedUrls';
import { Pokemon, PokemonData } from './type';

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
    console.error('Error in getAllPokemonNameAndUrl:', error);
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
export const fetchPokemonDetails = async (url: string): Promise<any> => {
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
  }
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
      const data: PokemonData = await ImageFilter(pokemon.url, callback);
      if (
        data &&
        Object.values(data).every((value: string | null) => value !== null)
      ) {
        // if (data) {
        // console.log(Object.values(data));
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
// 各個体のSpeciesDataを取得
export const getSpeciesData = async (data: any): Promise<any> => {
  const pokemonDetailResponse: any = await fetch(data.species.url, {
    cache: 'no-store',
  });

  return await pokemonDetailResponse.json();
};

export const getJPName = async (speciesData: any): Promise<string> => {
  const PokemonJPName = speciesData.names.find(
    (pokemonData: any) => pokemonData.language.name === 'ja-Hrkt'
  );
  return PokemonJPName.name;
};

export const getText = async (speciesData: any): Promise<string | null> => {
  //flavor_text_entriesがない場合はnullを返す
  if (!speciesData.flavor_text_entries) {
    return null;
  }

  // 日本語のテキストを取得
  const JPName = speciesData.flavor_text_entries.find(
    (pokemonData: any) => pokemonData.language.name === 'ja'
  );

  // 見つからなければ null を返す
  if (!JPName) {
    return null;
  }

  // 日本語テキストが見つかった場合のみデータを返す
  return JPName.flavor_text;
};

export const getCries = (data: any): string => {
  return data.cries.latest;
};

/********  以下の関数がgetCustomPokemonDataのcallbackとして使用  *********/

//画像データのみ取得
export const getImage = (data: any): string => {
  return data.sprites.front_default;
};
//画像と日本語名を取得
export const getImage_JPName = async (
  data: any
): Promise<{
  image: string;
  name: string;
}> => {
  const pokemonImage = getImage(data);
  const pokemonNames = await getSpeciesData(data);
  const pokemonJPName = await getJPName(pokemonNames);

  return {
    image: pokemonImage,
    name: pokemonJPName,
  };
};

// 画像データと日本語名とテキストを取得
export const getImage_JPName_Text = async (
  data: any
): Promise<{
  image: string;
  name: string;
  text: string | null;
}> => {
  const pokemonImage = getImage(data);
  const pokemonNames = await getSpeciesData(data);
  const pokemonJPName = await getJPName(pokemonNames);
  const pokemonText = await getText(pokemonNames);
  return {
    image: pokemonImage,
    name: pokemonJPName,
    text: pokemonText,
  };
};

// 画像データと日本語名とテキストと鳴き声を取得
export const getImage_JPName_Cries = async (
  data: any
): Promise<{ image: string; name: string; cry: string }> => {
  const pokemonImage = getImage(data);
  const pokemonCries = getCries(data);
  const pokemonNames = await getSpeciesData(data);
  const pokemonJPName = await getJPName(pokemonNames);
  return { image: pokemonImage, name: pokemonJPName, cry: pokemonCries };
};

/*****************************  ここまで  *******************************/

// 3分ごとにデータをシャッフル
export const getShuffledFiftyData = async (
  url: string,
  array: Pokemon[]
): Promise<any[]> => {
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

  const data = await res.json();

  return data;
};

// ５つの配列に分割
export const makeFiveImageArray = (imageArray: string[]): string[][] => {
  const array = [];

  for (let i = 0; i <= 50; i += 10) {
    array.push(imageArray.slice(i, i + 10));
  }

  return array;
};
