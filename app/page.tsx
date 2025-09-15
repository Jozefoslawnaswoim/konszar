import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Permits from "@/components/Permits";
import Coverage from "@/components/Coverage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="bg-neutral-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2"><span>📞</span><a href="tel:+48514847700" className="hover:opacity-80">+48 514 847 700</a></div>
          <div className="flex items-center gap-2"><span>✉️</span><a href="mailto:konszar@gmail.com" className="hover:opacity-80">konszar@gmail.com</a></div>
        </div>
      </div>
      <Header />
      <Hero />
      <Services />
      <Permits />
      <Coverage />
      <Contact />
      <Footer />
    </div>
  );
}
