import {
  createRandomPokemonData,
  getTwoHandredAllPokemonDetail,
} from '@/app/utils/dataHandle';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const allPokemon = await req.json();
    // console.error('ポケモンデータ', allPokemon);
    // 1302匹のurlと名前を含む配列
    const shuffledArray = createRandomPokemonData(allPokemon);
    // console.log('これはテスト', shuffledTwoHundredArray);
    // 上の配列から先頭２００匹のデータを取得
    const twentyFetchedData = await getTwoHandredAllPokemonDetail(
      shuffledArray
    );
    // console.log('これはテスト', shuffledTwoHundredArray);
    console.log('200匹', twentyFetchedData);
    // return NextResponse.json(shuffledTwoHundredDate);
    return NextResponse.json(twentyFetchedData);
  } catch (error) {
    console.error('Error in POST /api/pokemon/random:', error);
    return NextResponse.json(error);
  }
}
