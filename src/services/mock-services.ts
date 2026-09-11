import { MOCK_VALID_ACCESS_CODE } from "@/lib/constants/app";
import {
  mockDocuments,
  mockHistory,
  mockPricingPlans,
  mockSuggestedPrompts,
  mockUsage,
  mockUser,
} from "@/mocks/data";
import type {
  AuthEntryService,
  ChatService,
  DocumentService,
  HistoryService,
  PricingService,
  ProfileService,
  UsageService,
} from "./contracts";

const wait = (ms = 180) => new Promise((resolve) => setTimeout(resolve, ms));

export const authEntryService: AuthEntryService = {
  async verifyAccessCode(code) {
    await wait();
    if (code.replace(/\s/g, "") === MOCK_VALID_ACCESS_CODE) {
      return { ok: true, user: mockUser };
    }
    return { ok: false, message: "Maxsus raqam topilmadi. Demo uchun 123 456 789 ni kiriting." };
  },
};

export const chatService: ChatService = {
  async getSuggestedPrompts() {
    await wait(80);
    return mockSuggestedPrompts;
  },
};

export const documentService: DocumentService = {
  async list() {
    await wait(80);
    return mockDocuments;
  },
};

export const historyService: HistoryService = {
  async list() {
    await wait(80);
    return mockHistory;
  },
};

export const profileService: ProfileService = {
  async getCurrent() {
    await wait(80);
    return mockUser;
  },
};

export const usageService: UsageService = {
  async getSummary() {
    await wait(80);
    return mockUsage;
  },
};

export const pricingService: PricingService = {
  async listPlans() {
    await wait(80);
    return mockPricingPlans;
  },
};
