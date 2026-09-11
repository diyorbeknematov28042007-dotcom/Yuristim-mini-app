"use client";

import { ChatWorkspace } from "@/components/chat/chat-workspace";
import { DocumentWorkspace } from "@/components/chat/document-workspace";
import { useMiniApp } from "@/features/app-state/context";

export default function WorkspacePage() {
  const { mode } = useMiniApp();
  return mode === "chat" ? <ChatWorkspace /> : <DocumentWorkspace />;
}
