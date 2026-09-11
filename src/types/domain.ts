import type { Language } from "@/lib/i18n/dictionaries";
export type UserRole = "user" | "lawyer";
export type User = { id: string; displayName: string; username?: string; role: UserRole; credits: number; language: Language };
export type Lawyer = { id: string; name: string; specialty: string; rating: number; verified: boolean };
export type DocumentSummary = { id: string; title: string; status: "draft" | "ready"; updatedAt: string };
