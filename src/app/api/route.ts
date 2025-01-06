import { createRandomPokemonData } from '@/app/utils/dataHandle';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    console.log('Incoming request:', request);

    const req = await request.json();
    console.log('Request body:', req);

    const randomArray = createRandomPokemonData(req);
    console.log('Generated random array:', randomArray);
    return NextResponse.json(randomArray);
  } catch (error) {
    console.error('Error in GET /api', error);
    return NextResponse.json(error);
  }
}
