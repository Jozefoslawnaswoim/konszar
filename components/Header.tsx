"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#home" className="font-black tracking-tight text-xl">KONSZAR</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#uslugi" className="hover:text-neutral-600">Usługi</a>
          <a href="#tabor" className="hover:text-neutral-600">Tabor</a>
          <a href="#pozwolenia" className="hover:text-neutral-600">Pozwolenia</a>
          <a href="#obszar" className="hover:text-neutral-600">Obszar</a>
          <a href="#kontakt" className="hover:text-neutral-600">Kontakt</a>
        </nav>
        <a href="#kontakt" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition">
          Zamów wycenę
        </a>
      </div>
    </header>
  );
}
