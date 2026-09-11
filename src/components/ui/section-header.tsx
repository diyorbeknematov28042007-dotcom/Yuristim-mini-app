import type { ReactNode } from "react";
export function SectionHeader({ title, action }: { title: string; action?: ReactNode }) { return <div className="flex items-center justify-between gap-4"><h2 className="text-[17px] font-bold tracking-[-0.02em] text-ink">{title}</h2>{action}</div>; }
