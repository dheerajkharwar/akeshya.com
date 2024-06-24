import { NextResponse } from "next/server";

export async function POST(req) {
  // const data = req.formData();
  const data = await req.json();
  let name = data.name;
  let email = data.email;
  let subject = data.subject;
  let message = data.message;

  return NextResponse.json({ message: "success", data: data }, { status: 200 });
}
