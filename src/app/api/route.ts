import { createRandomPokemonData } from '@/app/utils/dataHandle';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const req = await request.json();

    const randomArray = createRandomPokemonData(req);

    return NextResponse.json(randomArray);
  } catch (error) {
    console.error('Error in GET /api', error);
    return NextResponse.json(error);
  }
}
