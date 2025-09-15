export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm flex flex-wrap items-center justify-between gap-4">
        <div>© {year} KONSZAR. Wszelkie prawa zastrzeżone.</div>
        <div className="text-neutral-600">Trans: 739681-1</div>
        <div className="text-neutral-600">Projekt i wykonanie — modernizacja UX/UI</div>
      </div>
    </footer>
  );
}
