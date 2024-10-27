import {
  createRandomPokemonData,
  getTwoHundredPokemonDetailDate,
} from '@/app/utils/dataHandle';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const allPokemonDetail = await req.json();
    const shuffledArray = createRandomPokemonData(allPokemonDetail);
    return NextResponse.json(shuffledArray);
  } catch (error) {
    return NextResponse.json(error);
  }
}
