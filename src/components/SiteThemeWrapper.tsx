"use client";

import type { ReactNode } from "react";
import { useNightMode } from "@/hooks/useNightMode";

export default function SiteThemeWrapper({ children }: { children: ReactNode }) {
  const { isNight } = useNightMode();

  return (
    <div
      className={`min-h-full flex flex-col transition-colors duration-1000 ${
        isNight
          ? "bg-gradient-to-b from-slate-900 via-teal-950 to-slate-950 text-slate-100"
          : "bg-gradient-to-b from-sky-50 via-pink-50 to-amber-50 text-slate-900"
      }`}
    >
      {children}
    </div>
  );
}
