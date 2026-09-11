import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";
import { AppProviders } from "@/components/providers/app-providers";

export const metadata: Metadata = {
  title: "Yuristim Mini App",
  description: "Yuristim LegalTech Telegram Mini App frontend foundation",
  applicationName: "Yuristim",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#00875A",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body>
        <AppProviders>
          <AppShell>{children}</AppShell>
        </AppProviders>
      </body>
    </html>
  );
}
