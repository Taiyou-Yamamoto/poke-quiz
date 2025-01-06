import {
  createRandomPokemonData,
  getFiftyAllPokemonDetail,
} from '@/app/utils/dataHandle';
import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   try {
//     const allPokemon = await req.json();
//     // 1302匹のurlと名前を含む配列
//     const shuffledArray = createRandomPokemonData(allPokemon);
//     //５０匹の画像データを取得
//     const twentyFetchedData = await getFiftyAllPokemonDetail(shuffledArray);
//     console.log('画像の確認', twentyFetchedData);
//     return NextResponse.json(twentyFetchedData);
//   } catch (error) {
//     console.error('Error in POST /api/pokemon/random:', error);
//     return NextResponse.json(error);
//   }
// }

export async function POST(request: Request) {
  try {
    const req = await request.json();
    const randomArray = createRandomPokemonData(req);
    return NextResponse.json(randomArray);
  } catch (error) {
    console.error('Error in GET /api/pokemon/random:', error);
    return NextResponse.json(error);
  }
}

// export async function POST() {
//   return NextResponse.json({ message: 'API is working' });
// }
