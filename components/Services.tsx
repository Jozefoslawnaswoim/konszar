import { CheckCircle } from "lucide-react";
export default function Services() {
  const items = [
    { title: "Płynne artykuły spożywcze", desc: "Cysterny z pompami elektrycznymi, ogrzewanie z certyfikatem ATP." },
    { title: "Towary neutralne", desc: "Tłuszcze, parafiny, oleje, kleje, glikole, nawozy — pozwolenia wet. KAT 1/2/3." },
    { title: "ADR spożywczy", desc: "Cysterny z zaświadczeniami sanitarnymi, najwyższe standardy bezpieczeństwa." },
    { title: "ADR chemiczny", desc: "Transport artykułów chemicznych podlegających ADR przez RP i UE." }
  ];
  return (
    <section id="uslugi" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Nasze usługi</h2>
        <p className="mt-2 text-neutral-600">Kompleksowy transport ładunków płynnych — od spożywczych po chemiczne ADR.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((c) => (
            <div key={c.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <CheckCircle className="w-5 h-5" />
              <div className="mt-3 font-semibold text-lg">{c.title}</div>
              <p className="text-neutral-700 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
