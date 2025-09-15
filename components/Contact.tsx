"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
        setError(json.error || "Nie udało się wysłać wiadomości.");
      }
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Błąd sieci");
    }
  }

  return (
    <section id="kontakt" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Kontakt</h2>
          <div className="mt-6 space-y-5 text-sm">
            <div>
              <div className="font-semibold">Siedziba spółki</div>
              <div>KONSZAR SP. Z O. O.<br/>ul. Grójecka 112/69, 02-367 Warszawa</div>
            </div>
            <div>
              <div className="font-semibold">Baza</div>
              <div>KONSZAR, ul. Warszawska 10, 26-910 Magnuszew</div>
            </div>
            <div>
              <div className="font-semibold">Telefon</div>
              <a href="tel:+48514847700" className="underline">+48 514 847 700</a><br/>
              <span className="text-neutral-600">Fax: +48 62 189 01</span>
            </div>
            <div>
              <div className="font-semibold">E-mail</div>
              <a href="mailto:konszar@gmail.com" className="underline">konszar@gmail.com</a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Imię i nazwisko</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500" placeholder="Jan Kowalski" />
            </div>
            <div>
              <label className="text-sm font-medium">E-mail</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500" placeholder="firma@domena.pl" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Telefon</label>
            <input name="phone" className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500" placeholder="+48 …" />
          </div>
          <div>
            <label className="text-sm font-medium">Wiadomość</label>
            <textarea name="message" required className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 h-28 outline-none focus:ring-2 focus:ring-amber-500" placeholder="Opisz krótko ładunek i relację przewozu…" />
          </div>
          <button disabled={status==="sending"} type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 text-white font-medium px-5 py-3 hover:bg-amber-600 transition disabled:opacity-60">
            {status==="sending" ? "Wysyłanie…" : "Wyślij zapytanie"}
          </button>
          <p className="text-xs text-neutral-500">Klikając „Wyślij zapytanie” akceptujesz przetwarzanie danych w celu kontaktu handlowego.</p>
          {status==="ok" && <p className="text-sm text-green-600">Wiadomość wysłana. Dziękujemy!</p>}
          {status==="error" && <p className="text-sm text-red-600">Błąd: {error}</p>}
        </form>
      </div>
    </section>
  );
}
