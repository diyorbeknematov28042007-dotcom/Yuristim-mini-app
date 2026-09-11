"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { AccessEntry } from "@/components/auth/access-entry";
import { ChatComposer } from "@/components/chat/chat-composer";
import { DrawerMenu } from "@/components/navigation/drawer-menu";
import { TopBar } from "@/components/navigation/top-bar";
import { useMiniApp } from "@/features/app-state/context";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { isAuthenticated } = useMiniApp();
  if (!isAuthenticated) return <AccessEntry />;
  const workspace = pathname === "/";
  return (
    <div className="min-h-[100dvh] bg-white">
      <DrawerMenu />
      {workspace ? <TopBar /> : null}
      <main className={workspace ? "app-content-width min-h-[calc(100dvh-var(--topbar-height))] pb-[calc(var(--composer-min-height)+env(safe-area-inset-bottom)+28px)]" : "min-h-[100dvh] bg-white"}>
        {children}
      </main>
      {workspace ? <ChatComposer /> : null}
    </div>
  );
}
