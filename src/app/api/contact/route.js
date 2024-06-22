import { sendMail } from "@/app/utility/sendMail";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req) {
  const res = await req.json();
  sendMail("dheerajKharwar9@gmail.com", res.name, res.subject, res.message);

  return NextResponse.json("Success");
}
