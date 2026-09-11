import type { ReactNode } from "react";
import { BottomNavigation } from "@/components/navigation/bottom-navigation";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh pb-[calc(var(--bottom-nav-height)+env(safe-area-inset-bottom))]">
      {children}
      <BottomNavigation />
    </div>
  );
}
