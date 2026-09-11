import type { ReactNode } from "react";
export function EmptyState({ icon, title, body, actions }: { icon: ReactNode; title: string; body: string; actions?: ReactNode }) {
  return <div className="mx-auto flex w-full max-w-[520px] flex-col items-center px-5 text-center"><div className="mb-5 flex size-12 items-center justify-center rounded-[14px] bg-mint-soft text-yuristim-dark">{icon}</div><h2 className="text-[22px] font-semibold tracking-[-0.02em] text-ink">{title}</h2><p className="mt-2 max-w-[440px] text-sm leading-6 text-muted">{body}</p>{actions ? <div className="mt-6 w-full">{actions}</div> : null}</div>;
}
