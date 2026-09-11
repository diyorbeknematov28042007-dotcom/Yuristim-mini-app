import type {
  ChatHistoryItem,
  DocumentSummary,
  PricingPlan,
  SuggestedPrompt,
  UsageSummary,
  User,
} from "@/types/domain";

export const mockUser: User = {
  id: "usr_demo_01",
  displayName: "Diyorbek Ne'matov",
  username: "diyorbeknematov",
  role: "user",
  credits: 87.5,
  language: "uz",
};

export const mockHistory: ChatHistoryItem[] = [
  { id: "chat-1", title: "Mehnat shartnomasi haqida", updatedAt: "Bugun" },
  { id: "chat-2", title: "Ijara masalasi", updatedAt: "Kecha" },
  { id: "chat-3", title: "Sudga ariza", updatedAt: "10-sentabr" },
  { id: "chat-4", title: "Soliq masalasi", updatedAt: "8-sentabr" },
  { id: "chat-5", title: "Oilaviy huquq", updatedAt: "6-sentabr" },
];

export const mockSuggestedPrompts: SuggestedPrompt[] = [
  { id: "prompt-1", text: "Mehnat shartnomasi haqida" },
  { id: "prompt-2", text: "Ijara shartnomasi namunasi" },
  { id: "prompt-3", text: "Sudga ariza qanday yoziladi?" },
  { id: "prompt-4", text: "Soliq masalasi bo'yicha maslahat" },
];

export const mockDocuments: DocumentSummary[] = [
  { id: "doc-1", title: "Da'vo arizasi qoralamasi", status: "draft", updatedAt: "11-sentabr" },
  { id: "doc-2", title: "Ijara shartnomasi", status: "ready", updatedAt: "7-sentabr" },
];

export const mockUsage: UsageSummary = {
  balance: 87.5,
  weeklyCredits: 12,
  permanentCredits: 75.5,
};

export const mockPricingPlans: PricingPlan[] = [
  { id: "plan-100", name: "100 kredit", credits: 100, priceLabel: "Tarif Phase 2 da ulanadi" },
  { id: "plan-250", name: "250 kredit", credits: 250, priceLabel: "Tarif Phase 2 da ulanadi" },
  { id: "plan-1000", name: "1000 kredit", credits: 1000, priceLabel: "Tarif Phase 2 da ulanadi" },
];
