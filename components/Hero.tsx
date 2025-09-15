export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-sky-50" />
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            Bezpieczny przewóz płynów w Polsce i UE
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Transport cysternami <span className="text-amber-600">spożywczy, neutralny, chemiczny</span> oraz ADR
          </h1>
          <p className="mt-4 text-neutral-700 text-lg">
            EURO 6, GPS/SENT, kompresory do samodzielnego rozładunku, doświadczony zespół kierowców i pełne ubezpieczenie ładunków.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#kontakt" className="px-5 py-3 rounded-2xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition">Skontaktuj się</a>
            <a href="#uslugi" className="px-5 py-3 rounded-2xl border border-neutral-300 hover:bg-neutral-100 font-medium transition">Poznaj ofertę</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=1600&auto=format&fit=crop"
              alt="Nowoczesny zestaw z cysterną na drodze"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg border border-neutral-200 p-4 text-sm">
            <span className="font-semibold">Ubezpieczenie ładunku</span> u renomowanych ubezpieczycieli
          </div>
        </div>
      </div>
    </section>
  );
}
