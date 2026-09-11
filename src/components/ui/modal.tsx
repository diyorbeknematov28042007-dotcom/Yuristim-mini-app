"use client";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { IconButton } from "./icon-button";
export function Modal({ open, title, onClose, children }: { open: boolean; title: string; onClose: () => void; children: ReactNode }) { if (!open) return null; return <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 p-0 sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label={title}><div className="w-full max-w-[560px] rounded-t-[24px] bg-white p-5 shadow-2xl sm:rounded-[24px]"><div className="mb-4 flex items-center justify-between gap-4"><h2 className="text-lg font-bold text-ink">{title}</h2><IconButton aria-label="Close" onClick={onClose}><X className="size-5" /></IconButton></div>{children}</div></div>; }
