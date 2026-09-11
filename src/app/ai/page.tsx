"use client";
import { Bot, Send, ShieldCheck, Sparkles } from "lucide-react";
import { AppHeader } from "@/components/layout/app-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, SoftInfoCard } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageContainer } from "@/components/ui/page-container";
import { useI18n } from "@/lib/i18n/context";
export default function AiPage() { const { t } = useI18n(); return <><AppHeader title={t("ai.title")} /><PageContainer className="space-y-5 pt-4"><section><Badge><Sparkles className="mr-1 size-3" />AI yordamchi</Badge><h1 className="mt-3 text-[26px] font-black tracking-[-0.04em] text-ink">{t("ai.title")}</h1><p className="mt-2 text-sm leading-6 text-muted">{t("ai.subtitle")}</p></section><Card className="p-3"><div className="flex min-h-56 flex-col items-center justify-center px-4 text-center"><div className="flex size-14 items-center justify-center rounded-[18px] bg-mint text-yuristim"><Bot className="size-7" aria-hidden="true" /></div><h2 className="mt-4 text-base font-bold">AI chat foundation tayyor</h2><p className="mt-1 max-w-[32ch] text-sm leading-6 text-muted">Real model va API keyingi integration phase’da ulanadi.</p></div><div className="flex gap-2 border-t border-border pt-3"><Input aria-label="AI question" placeholder={t("ai.placeholder")} disabled /><Button aria-label="Send" disabled className="shrink-0 px-3"><Send className="size-4" /></Button></div></Card><SoftInfoCard className="flex gap-3"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-yuristim" aria-hidden="true" /><p className="text-xs leading-5 text-muted">{t("ai.notice")}</p></SoftInfoCard></PageContainer></>; }
