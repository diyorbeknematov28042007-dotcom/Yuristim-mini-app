import type { LucideIcon } from "lucide-react";
import { Card } from "./card";
export function StatCard({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) { return <Card className="flex items-center gap-3 shadow-none"><div className="flex size-10 shrink-0 items-center justify-center rounded-[13px] bg-mint text-yuristim-dark"><Icon className="size-5" aria-hidden="true" /></div><div className="min-w-0"><p className="text-xs font-medium text-muted">{label}</p><p className="truncate text-lg font-bold tracking-[-0.03em] text-ink">{value}</p></div></Card>; }
