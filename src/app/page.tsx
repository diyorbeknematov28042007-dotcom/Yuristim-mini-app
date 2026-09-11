"use client";

import Link from "next/link";
import { Bot, BriefcaseBusiness, Coins, FilePlus2, Files, Scale, Store, WandSparkles } from "lucide-react";
import { AppHeader } from "@/components/layout/app-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, SoftInfoCard } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCard } from "@/components/ui/stat-card";
import { useI18n } from "@/lib/i18n/context";

const quickActions = [
  { href: "/lawyers", icon: BriefcaseBusiness, key: "home.findLawyer" as const },
  { href: "/documents", icon: FilePlus2, key: "home.createDocument" as const },
  { href: "#marketplace", icon: Store, key: "home.marketplace" as const },
  { href: "/documents", icon: Files, key: "home.samples" as const },
];

export default function HomePage() {
  const { t } = useI18n();
  return <>
    <AppHeader notifications />
    <PageContainer className="space-y-6 pt-3">
      <section><h1 className="text-[28px] font-black leading-[1.15] tracking-[-0.04em] text-ink">{t("home.greeting")}</h1><p className="mt-2 max-w-[38ch] text-sm leading-6 text-muted">{t("home.subtitle")}</p></section>
      <section className="relative overflow-hidden rounded-[24px] bg-yuristim p-5 text-white shadow-[0_16px_40px_rgba(0,107,79,0.18)]">
        <div className="pointer-events-none absolute -right-14 -top-16 size-40 rounded-full border border-white/10" /><div className="pointer-events-none absolute -right-4 top-8 size-24 rounded-full border border-white/10" />
        <Badge className="bg-white/14 text-white">{t("home.aiEyebrow")}</Badge>
        <div className="mt-5 max-w-[330px]"><h2 className="text-[22px] font-black leading-tight tracking-[-0.035em]">{t("home.aiTitle")}</h2><p className="mt-2 text-sm leading-6 text-white/80">{t("home.aiBody")}</p></div>
        <Link href="/ai" className="mt-5 inline-flex"><Button className="bg-white text-yuristim hover:bg-mint" size="lg"><WandSparkles className="size-4" aria-hidden="true" />{t("home.aiCta")}</Button></Link>
      </section>
      <section className="space-y-3"><SectionHeader title={t("home.quick")} /><div className="grid grid-cols-2 gap-3">{quickActions.map(({ href, icon: Icon, key }) => <Link key={`${href}-${key}`} href={href} className="group rounded-[18px] border border-border bg-white p-4 transition-colors hover:border-yuristim/30 hover:bg-mint-soft"><div className="flex size-10 items-center justify-center rounded-[13px] bg-mint text-yuristim-dark transition-transform group-active:scale-95"><Icon className="size-5" aria-hidden="true" /></div><p className="mt-4 text-sm font-bold leading-5 text-ink">{t(key)}</p></Link>)}</div></section>
      <section className="grid grid-cols-2 gap-3"><StatCard label={t("home.balance")} value={`62 ${t("home.credits")}`} icon={Coins} /><StatCard label="Yuristim" value="Verified" icon={Scale} /></section>
      <section className="space-y-3" id="marketplace"><SectionHeader title={t("home.active")} /><SoftInfoCard className="flex items-center gap-3"><div className="flex size-10 shrink-0 items-center justify-center rounded-[13px] bg-white text-yuristim shadow-sm"><Bot className="size-5" aria-hidden="true" /></div><div><p className="text-sm font-semibold text-ink">{t("home.noActive")}</p><p className="mt-0.5 text-xs leading-5 text-muted">Marketplace oqimi keyingi fazada ulanadi.</p></div></SoftInfoCard></section>
      <Card className="border-0 bg-transparent p-0 shadow-none"><p className="text-center text-[11px] leading-5 text-muted">Yuristim · Frontend Foundation · Phase 1</p></Card>
    </PageContainer>
  </>;
}
