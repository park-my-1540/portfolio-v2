import { NextResponse } from 'next/server';

export const runtime = 'edge'; // ✅ Edge Functions 활성화

async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();

    return new Response(Buffer.from(buffer), {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=3600', // 1시간 캐싱
      },
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }
}

export { GET };
export default GET;
