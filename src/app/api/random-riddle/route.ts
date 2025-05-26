import { NextRequest } from 'next/server';
import db from '../../../../db';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const excluded = searchParams.get('excluded');
    const riddles = db.riddles.filter((riddle) => riddle.id !== excluded);
    const random = riddles[Math.floor(Math.random() * riddles.length)];

    return Response.json({ id: random.id });
}
