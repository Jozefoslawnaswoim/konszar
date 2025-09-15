# KONSZAR — Next.js + Tailwind + Resend

Gotowy projekt do wdrożenia na **Vercel** z działającym formularzem kontaktowym (wysyłka e-mail przez Resend).

## Szybki start lokalnie

```bash
pnpm i # albo: npm i / yarn
pnpm dev
```

## Wdrożenie na Vercel

1. Zrób repo na GitHub i wrzuć cały katalog.
2. W Vercel wybierz „New Project” → wskaż repo.
3. Ustaw zmienne środowiskowe:
   - `RESEND_API_KEY` — klucz z https://resend.com (Free tier działa na Vercel).
   - `FROM_EMAIL` — nadawca, np. `Konszar <no-reply@twojadomena.pl>` (nadawca musi być zweryfikowany w Resend).
   - `TO_EMAIL` — adres docelowy, np. `konszar@gmail.com`.
4. Deploy.

## Konfiguracja formularza

Endpoint: `POST /api/contact` przyjmuje JSON `{ name, email, phone?, message }` i wysyła wiadomość przez Resend. Na sukces zwraca `{ ok: true }`.

## Zdjęcia floty

Aktualnie używamy zdjęć placeholder (Unsplash). Podmień linki w `components/Fleet.tsx` na własne fotografie (np. z `/public/fleet/*.jpg`).

## Dostosowanie
- Kolory, treści i sekcje są w komponentach w katalogu `components/`.
- Style: Tailwind (pliki w `app/` i `globals.css`).

## Bezpieczeństwo
- Nie zapisujemy danych po stronie serwera; e-mail trafia bezpośrednio na `TO_EMAIL`.
- Rozważ dodanie honeypot / reCAPTCHA, jeśli pojawi się spam.
