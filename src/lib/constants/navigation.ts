import { Bot, FileText, Scale, UserRound, Users } from "lucide-react";

export const bottomNavigation = [
  { href: "/", key: "nav.home", icon: Scale },
  { href: "/ai", key: "nav.ai", icon: Bot },
  { href: "/lawyers", key: "nav.lawyers", icon: Users },
  { href: "/documents", key: "nav.documents", icon: FileText },
  { href: "/profile", key: "nav.profile", icon: UserRound },
] as const;
