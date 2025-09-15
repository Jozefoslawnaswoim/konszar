import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KONSZAR — Transport cysternami",
  description: "Transport płynnych ładunków: spożywczy, neutralny, chemiczny oraz ADR. EURO 6, GPS/SENT, kompresory do rozładunku.",
  metadataBase: new URL("https://konszar.pl")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
