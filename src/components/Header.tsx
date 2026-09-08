"use client";

import Link from "next/link";
import { useNightMode } from "@/hooks/useNightMode";

export default function Header() {
  const { isNight } = useNightMode();

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 max-w-3xl mx-auto">
      <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
        今日のイケメン占い
        {isNight && (
          <span className="text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30">
            NIGHT MODE
          </span>
        )}
      </Link>
      <nav className="flex gap-4 text-sm font-medium opacity-80">
        <Link href="/">診断</Link>
        <Link href="/characters">キャラ紹介</Link>
      </nav>
    </header>
  );
}
