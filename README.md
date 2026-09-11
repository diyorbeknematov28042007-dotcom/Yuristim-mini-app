# Yuristim Mini App

Standalone frontend repository for the Yuristim LegalTech Telegram Mini App.

## Phase 1 scope

Phase 1 establishes **Foundation + Core Shell** only. The product is intentionally chat-first: after frontend-only access verification, the user lands directly in a compact legal assistant workspace with a `Chat | Hujjat` mode switch, plain-text model selector, drawer navigation, chat history and a mobile composer.

There is no dashboard-first home screen and no five-item bottom navigation.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript strict mode
- Tailwind CSS 4
- Lucide vector icons
- React context/hooks for lightweight frontend state

## Design direction

The UI combines ChatGPT-like interaction simplicity with HIKMA-inspired whitespace, restrained emerald accents and Yuristim's LegalTech trust requirements.

Brand colors:
- `#00875A` — primary green
- `#006B4F` — dark green
- `#DFF7EC` — soft mint
- `#F3FFF9` — light mint
- `#111827` — main text
- `#FFFFFF` — primary surface

Design tokens are centralized in CSS variables and `src/lib/constants/design-tokens.ts`.

## Architecture

```text
src/
  app/                  # App Router screens
  components/
    auth/               # access-code UX
    chat/               # chat/document workspace and composer
    layout/             # global shell
    navigation/         # top bar, drawer, history, model/mode selectors
    ui/                 # reusable primitives
  features/app-state/   # lightweight frontend state
  lib/
    constants/          # brand/product constants
    i18n/               # uz/ru/en dictionary foundation
    telegram/           # Telegram/browser frontend abstraction
  mocks/                # mock data only
  services/             # service contracts + mock implementations
  types/                # shared domain types
```

UI components do not import mock data directly. They consume state or typed service abstractions, so a future integration agent can replace the mock service implementations with real Yuristim API clients without rewriting the UI layer.

## Access flow

There is no intro/welcome marketing screen. The first screen asks for the special number issued by the Yuristim Telegram bot. This number is explicitly described as **not a Telegram ID**.

Phase 1 uses a frontend-only demo verification code:

```text
123 456 789
```

The Telegram bot URL is centralized through `NEXT_PUBLIC_YURISTIM_BOT_URL` with a frontend fallback constant.

## Telegram Mini App foundation

The repository includes frontend abstractions for Telegram environment detection, browser fallback, `ready()` / `expand()` initialization, BackButton handling, haptic feedback, safe-area CSS and a mock Telegram user context. Real Telegram `initData` server validation is intentionally not implemented.

## Internationalization

The dictionary architecture supports Uzbek (`uz`, default), Russian (`ru`) and English (`en`). Core Phase 1 visible copy is dictionary-driven and key parity is enforced by TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Quality gates:

```bash
npm run lint
npm run typecheck
npm run build
```

## Vercel

The project is a root-level Next.js app and includes `vercel.json`, so it can be imported directly into Vercel. No server environment variables are required for Phase 1. `NEXT_PUBLIC_YURISTIM_BOT_URL` is optional.

## Intentional non-goals

Production backend, Telegram authentication validation, Yuristim APIs, Supabase, payments and AI provider integrations are intentionally not implemented in this repository yet.

Also out of scope in Phase 1: real AI conversations or streaming, real file upload/processing, document generation/analysis, marketplace and lawyer search, real credit ledger, real payments and production authentication.

This standalone frontend is intended to be integrated into the main Yuristim repository later by a separate integration agent.
