import {
  createRandomPokemonData,
  getTwoHundredPokemonDetailDate,
} from '@/app/utils/dataHandle';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const allPokemonDetail = await req.json();
    console.log('allPokemonDetail', allPokemonDetail);

    const shuffledArray = createRandomPokemonData(allPokemonDetail);
    console.log('shuffledArray', shuffledArray);

    const shuffledTwoHundredDate =
      getTwoHundredPokemonDetailDate(shuffledArray);

    return NextResponse.json(shuffledTwoHundredDate);
  } catch (error) {
    console.error('Error in POST /api/pokemon/random:', error);
    return NextResponse.json(error);
  }
}
