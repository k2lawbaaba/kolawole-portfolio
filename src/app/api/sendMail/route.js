import sendEmail from "@/helpers/sendMail";
import { NextResponse } from "next/server";
export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const response = await sendEmail(name, email, message);
    if (response.success) {
      return NextResponse.json({ message: "Email sent successfully" , status: 200 });
    } else {
        return NextResponse.json({ message: response.error, status: 200 });
     
    }
  } catch (err) {
    return NextResponse.json({ message: err, status: 200 });
  }
}

