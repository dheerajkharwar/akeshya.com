import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req) {
  const res = await req.json();
  console.log(res.name);
  console.log(res.email);
  console.log(res.subject);
  console.log(res.body);

  return NextResponse.json("Success");
}
