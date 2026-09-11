import type { Language } from "@/lib/i18n/dictionaries";

export type UserRole = "user" | "lawyer";
export type WorkspaceMode = "chat" | "document";
export type ModelId = "fast" | "expert";

export type User = {
  id: string;
  displayName: string;
  username?: string;
  role: UserRole;
  credits: number;
  language: Language;
};

export type AccessVerificationResult =
  | { ok: true; user: User }
  | { ok: false; message: string };

export type ChatHistoryItem = {
  id: string;
  title: string;
  updatedAt: string;
};

export type SuggestedPrompt = {
  id: string;
  text: string;
};

export type DocumentSummary = {
  id: string;
  title: string;
  status: "draft" | "ready";
  updatedAt: string;
};

export type UsageSummary = {
  balance: number;
  weeklyCredits: number;
  permanentCredits: number;
};

export type PricingPlan = {
  id: string;
  name: string;
  credits: number;
  priceLabel: string;
};
