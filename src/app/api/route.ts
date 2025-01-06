import {
  createRandomPokemonData,
  getFiftyAllPokemonDetail,
} from '@/app/utils/dataHandle';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const req = await request.json();

    const randomArray = createRandomPokemonData(req);

    const imageArray = await getFiftyAllPokemonDetail(randomArray);

    return NextResponse.json(imageArray);
  } catch (error) {
    console.error('Error in GET /api', error);
    return NextResponse.json(error);
  }
}
