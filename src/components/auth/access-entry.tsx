"use client";
import { ExternalLink, Scale, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useMiniApp } from "@/features/app-state/context";
import { YURISTIM_BOT_URL } from "@/lib/constants/app";
import { useI18n } from "@/lib/i18n/context";
import { telegramHaptic } from "@/lib/telegram/telegram";
import { AuthCodeInput } from "./auth-code-input";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { PrimaryButton } from "@/components/ui/primary-button";
export function AccessEntry() {
  const { t } = useI18n(); const { verifyAccessCode, isAuthenticating } = useMiniApp(); const [code, setCode] = useState(""); const [error, setError] = useState<string | null>(null); const [helpOpen, setHelpOpen] = useState(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setError(null); const result = await verifyAccessCode(code); if (!result.ok) { telegramHaptic("medium"); setError(result.message); return; } telegramHaptic("light"); }
  const steps = ["auth.step1", "auth.step2", "auth.step3", "auth.step4", "auth.step5"] as const;
  return <main className="app-safe-top app-safe-bottom min-h-[100dvh] bg-white"><div className="mx-auto flex min-h-[calc(100dvh-16px)] w-full max-w-[480px] flex-col px-5 pb-5 pt-8 sm:px-7 sm:pt-12">
    <div className="mb-8 flex size-11 items-center justify-center rounded-[13px] bg-mint-soft text-yuristim-dark"><Scale size={23} strokeWidth={1.8} aria-hidden="true" /></div>
    <div className="max-w-[420px]"><h1 className="text-[28px] font-semibold leading-[1.15] tracking-[-0.035em] text-ink sm:text-[30px]">{t("auth.heading")}</h1><p className="mt-3 text-[15px] leading-6 text-muted">{t("auth.supporting")}</p></div>
    <form onSubmit={handleSubmit} className="mt-8 space-y-4"><AuthCodeInput value={code} onChange={(next) => { setCode(next); if (error) setError(null); }} label={t("auth.label")} placeholder={t("auth.placeholder")} invalid={Boolean(error)} />{error ? <p role="alert" className="text-sm leading-5 text-red-700">{error}</p> : <p className="text-xs text-neutral-400">{t("auth.demoHint")}</p>}<PrimaryButton type="submit" disabled={code.length !== 9 || isAuthenticating} className="w-full">{isAuthenticating ? "…" : t("common.continue")}</PrimaryButton></form>
    <div className="mt-8 border-t border-neutral-100 pt-6"><p className="text-sm font-medium text-ink">{t("auth.noCode")}</p><button type="button" onClick={() => setHelpOpen(true)} className="mt-2 min-h-11 text-left text-sm font-semibold text-yuristim hover:text-yuristim-dark">{t("auth.how")}</button></div>
    <div className="mt-auto pt-8"><a href={YURISTIM_BOT_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[14px] border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-neutral-50">{t("common.openBot")}<ExternalLink size={17} strokeWidth={1.9} aria-hidden="true" /></a></div>
  </div><BottomSheet open={helpOpen} title={t("auth.helpTitle")} onClose={() => setHelpOpen(false)}><div className="pb-1 pt-1"><div className="mb-4 flex items-start gap-3 rounded-[14px] bg-mint-soft p-3.5"><ShieldCheck className="mt-0.5 shrink-0 text-yuristim-dark" size={20} strokeWidth={1.8} /><p className="text-sm leading-5 text-ink">{t("auth.helpBody")}</p></div><ol className="space-y-1">{steps.map((key, index) => <li key={key} className="flex gap-3 py-2.5 text-sm leading-5 text-ink"><span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-600">{index + 1}</span><span>{t(key)}</span></li>)}</ol><a href={YURISTIM_BOT_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[14px] bg-yuristim px-4 py-2.5 text-sm font-semibold text-white hover:bg-yuristim-dark">{t("common.openBot")}<ExternalLink size={17} strokeWidth={1.9} /></a></div></BottomSheet></main>;
}
