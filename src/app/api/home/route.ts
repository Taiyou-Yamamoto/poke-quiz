import { createRandomPokemonData, getOnlyImage } from '@/app/utils/dataHandle';
import { NextResponse } from 'next/server';
import { getCustomPokemonData } from '../../utils/dataHandle';

export async function POST(request: Request) {
  try {
    const req = await request.json();
    console.log('Request Payload:', req);

    // 簡単なレスポンスを返す
    return NextResponse.json({ message: 'API is working!', payload: req });
  } catch (error) {
    console.error('Error in API:', error);
    return NextResponse.json({ error: 'Something went wrong' });
  }
}

// export async function POST(request: Request) {
//   try {
//     const req = await request.json();
//     console.log('req', req);

//     const randomArray = createRandomPokemonData(req);
//     console.log('randomArray', randomArray);

//     const imageArray = await getCustomPokemonData(
//       randomArray,
//       50,
//       getOnlyImage
//     );

//     console.log('imageArray', imageArray);
//     return NextResponse.json(randomArray);
//   } catch (error) {
//     console.error('Error in GET /api', error);
//     return NextResponse.json(error);
//   }
// }
