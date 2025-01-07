import { createRandomPokemonData, getOnlyImage } from '@/app/utils/dataHandle';
import { NextResponse } from 'next/server';
import { getCustomPokemonData } from '../../utils/dataHandle';

// export async function GET() {
//   try {
//     return NextResponse.json({ message: 'GET is working!' });
//   } catch (error) {
//     console.error('Error in API:', error);
//     return NextResponse.json({ error: 'Something went wrong' });
//   }
// }

export async function POST(request: Request) {
  try {
    const req = await request.json();
    console.log('req', req);

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
