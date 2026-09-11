"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { authEntryService, historyService, usageService } from "@/services";
import type {
  AccessVerificationResult,
  ChatHistoryItem,
  ModelId,
  UsageSummary,
  User,
  WorkspaceMode,
} from "@/types/domain";

type MiniAppContextValue = {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  user: User | null;
  mode: WorkspaceMode;
  model: ModelId;
  drawerOpen: boolean;
  history: ChatHistoryItem[];
  usage: UsageSummary | null;
  activeChatId: string | null;
  draft: string;
  verifyAccessCode: (code: string) => Promise<AccessVerificationResult>;
  setMode: (mode: WorkspaceMode) => void;
  setModel: (model: ModelId) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  selectChat: (chatId: string) => void;
  startNewChat: () => void;
  setDraft: (value: string) => void;
};

const MiniAppContext = createContext<MiniAppContextValue | null>(null);

export function MiniAppProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [mode, setMode] = useState<WorkspaceMode>("chat");
  const [model, setModel] = useState<ModelId>("fast");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [history, setHistory] = useState<ChatHistoryItem[]>([]);
  const [usage, setUsage] = useState<UsageSummary | null>(null);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  const verifyAccessCode = useCallback(async (code: string) => {
    setIsAuthenticating(true);
    const result = await authEntryService.verifyAccessCode(code);
    if (result.ok) {
      setUser(result.user);
      setIsAuthenticated(true);
      const [historyItems, usageSummary] = await Promise.all([
        historyService.list(),
        usageService.getSummary(),
      ]);
      setHistory(historyItems);
      setUsage(usageSummary);
    }
    setIsAuthenticating(false);
    return result;
  }, []);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const selectChat = useCallback((chatId: string) => {
    setActiveChatId(chatId);
    setMode("chat");
    setDrawerOpen(false);
    setDraft("");
  }, []);
  const startNewChat = useCallback(() => {
    setActiveChatId(null);
    setMode("chat");
    setDrawerOpen(false);
    setDraft("");
  }, []);

  const value = useMemo<MiniAppContextValue>(
    () => ({
      isAuthenticated,
      isAuthenticating,
      user,
      mode,
      model,
      drawerOpen,
      history,
      usage,
      activeChatId,
      draft,
      verifyAccessCode,
      setMode,
      setModel,
      openDrawer,
      closeDrawer,
      selectChat,
      startNewChat,
      setDraft,
    }),
    [activeChatId, closeDrawer, drawerOpen, draft, history, isAuthenticated, isAuthenticating, model, mode, openDrawer, selectChat, startNewChat, usage, user, verifyAccessCode],
  );

  return <MiniAppContext.Provider value={value}>{children}</MiniAppContext.Provider>;
}

export function useMiniApp() {
  const context = useContext(MiniAppContext);
  if (!context) throw new Error("useMiniApp must be used inside MiniAppProvider");
  return context;
}
