"use client";

import Image from "next/image";
import { useNightMode } from "@/hooks/useNightMode";

export default function HeroImage() {
  const { isNight } = useNightMode();
  const src = isNight ? "/hero.jpeg" : "/hero-day.png";

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm aspect-[896/1200] rounded-3xl overflow-hidden shadow-2xl">
      <Image src={src} alt="今日のイケメンたち" fill className="object-cover" priority />
    </div>
  );
}
