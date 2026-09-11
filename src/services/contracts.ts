import type {
  AccessVerificationResult,
  ChatHistoryItem,
  DocumentSummary,
  PricingPlan,
  SuggestedPrompt,
  UsageSummary,
  User,
} from "@/types/domain";

export interface AuthEntryService {
  verifyAccessCode(code: string): Promise<AccessVerificationResult>;
}

export interface ChatService {
  getSuggestedPrompts(): Promise<SuggestedPrompt[]>;
}

export interface DocumentService {
  list(): Promise<DocumentSummary[]>;
}

export interface HistoryService {
  list(): Promise<ChatHistoryItem[]>;
}

export interface ProfileService {
  getCurrent(): Promise<User>;
}

export interface UsageService {
  getSummary(): Promise<UsageSummary>;
}

export interface PricingService {
  listPlans(): Promise<PricingPlan[]>;
}
