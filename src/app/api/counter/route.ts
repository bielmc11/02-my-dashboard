import { NextResponse } from "next/server";

export async function GET(req: Request) {
    console.log('informacion de la request', req.method, req.url)
    return NextResponse.json({
        count : 101
    })
}