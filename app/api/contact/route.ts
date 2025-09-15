import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Brak wymaganych pól." }, { status: 400 });
    }
    if (!process.env.FROM_EMAIL || !process.env.TO_EMAIL) {
      return NextResponse.json({ ok: false, error: "Brak konfiguracji e-mail (ENV)." }, { status: 500 });
    }

    const text = `Nowe zapytanie z formularza:
Imię i nazwisko: ${name}
E-mail: ${email}
Telefon: ${phone || "-"}

Wiadomość:
${message}
`;

    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "KONSZAR — nowe zapytanie z formularza",
      reply_to: email,
      text
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Błąd serwera podczas wysyłki." }, { status: 500 });
  }
}
