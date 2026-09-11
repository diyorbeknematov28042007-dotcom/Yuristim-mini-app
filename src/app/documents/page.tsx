"use client";
import { FilePlus2, FileText, LayoutTemplate } from "lucide-react";
import { AppHeader } from "@/components/layout/app-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/states";
import { PageContainer } from "@/components/ui/page-container";
import { SectionHeader } from "@/components/ui/section-header";
import { useI18n } from "@/lib/i18n/context";
export default function DocumentsPage() { const { t } = useI18n(); return <><AppHeader title={t("documents.title")} /><PageContainer className="space-y-6 pt-4"><section><h1 className="text-[26px] font-black tracking-[-0.04em] text-ink">{t("documents.title")}</h1><p className="mt-2 text-sm leading-6 text-muted">{t("documents.subtitle")}</p></section><div className="grid grid-cols-2 gap-3"><Card className="shadow-none"><FilePlus2 className="size-5 text-yuristim" /><p className="mt-4 text-sm font-bold">Hujjat yaratish</p><p className="mt-1 text-xs leading-5 text-muted">Guided generator foundation</p></Card><Card className="shadow-none"><LayoutTemplate className="size-5 text-yuristim" /><p className="mt-4 text-sm font-bold">{t("documents.templates")}</p><p className="mt-1 text-xs leading-5 text-muted">Tayyor huquqiy shakllar</p></Card></div><section className="space-y-3"><SectionHeader title={t("documents.mine")} action={<Button variant="ghost" size="sm">{t("common.viewAll")}</Button>} /><EmptyState title={t("empty.title")} body={t("empty.body")} /></section><div className="flex items-center justify-center gap-2 text-xs text-muted"><FileText className="size-4" /> PDF/DOCX integration keyingi fazalarda</div></PageContainer></>; }
