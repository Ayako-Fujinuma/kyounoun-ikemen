"use client";

import type { ReactNode } from "react";
import { useNightMode } from "@/hooks/useNightMode";

export default function SiteThemeWrapper({ children }: { children: ReactNode }) {
  const { isNight } = useNightMode();

  return (
    <div
      className={`relative min-h-full flex flex-col transition-colors duration-1000 ${
        isNight
          ? "bg-gradient-to-b from-slate-900 via-teal-950 to-slate-950 text-slate-100"
          : "bg-gradient-to-b from-sky-50 via-pink-50 to-amber-50 text-slate-900"
      }`}
    >
      <div className="pointer-events-none fixed inset-0 hidden overflow-hidden lg:block" aria-hidden>
        <div
          className={`absolute -left-24 top-24 h-96 w-96 rounded-full blur-3xl transition-colors duration-1000 ${
            isNight ? "bg-teal-500/10" : "bg-pink-300/30"
          }`}
        />
        <div
          className={`absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full blur-3xl transition-colors duration-1000 ${
            isNight ? "bg-indigo-500/10" : "bg-amber-200/30"
          }`}
        />
        <div
          className={`absolute -left-16 bottom-24 h-72 w-72 rounded-full blur-3xl transition-colors duration-1000 ${
            isNight ? "bg-cyan-400/10" : "bg-sky-200/30"
          }`}
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
