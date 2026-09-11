"use client";
import { Button } from "@/components/ui/button";
import { ErrorState } from "@/components/ui/states";
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) { return <main className="page-shell app-safe-top space-y-4 pt-6"><ErrorState message="Sahifani yuklashda xatolik yuz berdi." /><Button onClick={reset}>Qayta urinish</Button></main>; }
