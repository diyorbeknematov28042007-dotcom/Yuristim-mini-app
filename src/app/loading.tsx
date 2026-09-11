import { SkeletonBlock } from "@/components/ui/states";
export default function Loading() { return <main className="page-shell app-safe-top space-y-4 pt-5" aria-label="Loading"><SkeletonBlock className="h-10 w-2/3" /><SkeletonBlock className="h-32" /><div className="grid grid-cols-2 gap-3"><SkeletonBlock className="h-28" /><SkeletonBlock className="h-28" /></div></main>; }
