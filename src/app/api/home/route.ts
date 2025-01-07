import { createRandomPokemonData, getOnlyImage } from '@/app/utils/dataHandle';
import { NextResponse } from 'next/server';
import { getCustomPokemonData } from '../../utils/dataHandle';

export async function POST(request: Request) {
  try {
    const req = await request.json();

    const randomArray = createRandomPokemonData(req);
    console.log('randomArray', randomArray);
    const imageArray = await getCustomPokemonData(
      randomArray,
      50,
      getOnlyImage
    );

    console.log('imageArray', imageArray);
    return NextResponse.json(imageArray);
  } catch (error) {
    console.error('Error in GET /api', error);
    return NextResponse.json(error);
  }
}
