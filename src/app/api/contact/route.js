import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req) {
  const res = await req.json();
  console.log(res);

  return NextResponse.json("Success");
}
