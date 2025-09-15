import { Shield } from "lucide-react";
export default function Permits() {
  const items = [
    "Rejestr BDO — przewóz odpadów (PL)",
    "Pozwolenia DE — przewóz odpadów (Niemcy)",
    "TRACE — przewóz KAT 1/2/3",
    "Zaświadczenia Sanepid"
  ];
  return (
    <section id="pozwolenia" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Pozwolenia i certyfikaty</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          {items.map((t) => (
            <div key={t} className="rounded-2xl border border-neutral-200 bg-white p-5">
              <Shield className="w-5 h-5" />
              <div className="mt-2 font-semibold">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
