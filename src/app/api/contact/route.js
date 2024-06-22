import { NextResponse } from "next/server";
// import { createTransport } from "nodemailer";

export const runtime = "edge";

export async function POST(req) {
  const res = await req.json();
  let name = res.name;
  let email = res.email;
  let subject = res.subject;
  let message = res.message;

  console.log(name, email, subject, message);

  // try {
  //   const transporter = createTransport({
  //     host: process.env.SMTP_HOST,
  //     port: process.env.SMTP_PORT,
  //     secure: false, // Use `true` for port 465, `false` for all other ports
  //     auth: {
  //       user: process.env.SMTP_EMAIL,
  //       pass: process.env.SMTP_PASSWORD,
  //     },
  //   });
  // } catch (error) {
  //   console.log("err1:", error);
  // }
  // try {
  //   const info = await transporter.sendMail({
  //     from: process.env.SMTP_EMAIL, // sender address
  //     to: process.env.TO_EMAIL, // list of receivers
  //     subject: subject, // Subject line
  //     text: message, // plain text body
  //     html: "<b>Hello world?</b>", // html body
  //   });
  // } catch (error) {
  //   console.log("err2:", error);
  // }
  // console.log("Message sent: %s", info.messageId);
  return NextResponse.json("Success");
}
