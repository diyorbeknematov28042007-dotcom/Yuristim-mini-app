# Yuristim Mini App

Yuristim LegalTech mahsuloti uchun Telegram Mini App frontend foundation.

## Phase 1 scope

Bu repository hozircha **frontend-only**. Production backend integration mavjud emas.

Phase 1 quyidagilarni beradi:

- Next.js App Router + TypeScript;
- Tailwind CSS mobile-first design system;
- Yuristim brand tokenlari (`#00875A`, `#006B4F`, mint surfaces);
- Telegram Mini App frontend abstraction va browser fallback;
- Uzbek / Russian / English i18n foundation;
- global app shell va bottom navigation;
- reusable UI components;
- Home, AI, Lawyers, Documents va Profile foundation sahifalari;
- typed mock service contracts;
- Vercel-compatible project configuration;
- GitHub Actions orqali lint, typecheck va build quality gate.

## Explicit non-goals

Phase 1 quyidagilarni o‘z ichiga olmaydi: backend yoki route-handler business API, Supabase integration, real Telegram auth validation, JWT/session backend, payment backend, real AI model/API integration va production marketplace logic.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React

## Development

```bash
npm install
npm run dev
```

Local URL: `http://localhost:3000`

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Structure

```text
src/
  app/
  components/
    layout/
    navigation/
    providers/
    ui/
  hooks/
  lib/
    constants/
    i18n/
    telegram/
    utils/
  mocks/
  services/
  types/
```

## Telegram Mini App foundation

Frontend layer `window.Telegram.WebApp` mavjudligini aniqlaydi, `ready()` / `expand()` ni chaqiradi, browser uchun mock fallback user beradi hamda haptic feedback va BackButton abstractionlarini o‘z ichiga oladi.

**Important:** Telegram `initData` bu repositoryda validatsiya qilinmaydi. Secure validation keyinchalik mavjud Yuristim backendida bajariladi.

## i18n

Default language: `uz`. Supported: `uz`, `ru`, `en`.

## Vercel

Bu standart Next.js loyiha. Vercel'da repository root project root sifatida ishlaydi. Phase 1 uchun production environment variable talab qilinmaydi.

## Future integration

Service layer data source'lardan ajratilgan. Keyinchalik mock implementationlar mavjud Yuristim API clientlari bilan almashtiriladi; business logic brauzerga ko‘chirilmaydi.
