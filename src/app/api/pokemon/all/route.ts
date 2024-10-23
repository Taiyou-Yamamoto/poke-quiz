import { NextResponse } from 'next/server';

const url: string =
  // とりあえづエラー消すために仮の要素を代入
  process.env.NEXT_PUBLIC_POKEMON_API_URL || 'https://default-api-url.com';

export async function GET() {
  if (!url) {
    return NextResponse.json({ message: 'urlにエラーがありました。' });
  }

  const res = await fetch(url);

  if (!res.ok) {
    return NextResponse.json({ message: 'エラーが発生しました。' });
  }
  const data = await res.json();

  return NextResponse.json(data, { status: 200 });
}
