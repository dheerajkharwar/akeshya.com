import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req) {
  const res = await req.json();
  console.log(res.name);

  return NextResponse.json("Success");
}
