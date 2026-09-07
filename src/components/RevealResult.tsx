"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { characters, type Character } from "@/lib/characters";
import { formatDateKeyForDisplay } from "@/lib/date";

const SHUFFLE_INTERVAL_MS = 110;
const SHUFFLE_STEPS = 12;
const PAUSE_ON_LANDED_MS = 350;

interface Props {
  finalCharacter: Character;
  isNight: boolean;
  birthdateKey: string;
  children: ReactNode;
}

export default function RevealResult({ finalCharacter, isNight, birthdateKey, children }: Props) {
  const [revealed, setRevealed] = useState(false);
  const [shuffleIndex, setShuffleIndex] = useState(0);

  useEffect(() => {
    const finalIndex = characters.findIndex((c) => c.id === finalCharacter.id);
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step >= SHUFFLE_STEPS) {
        clearInterval(interval);
        setShuffleIndex(finalIndex);
        setTimeout(() => setRevealed(true), PAUSE_ON_LANDED_MS);
        return;
      }
      setShuffleIndex((i) => (i + 1) % characters.length);
    }, SHUFFLE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [finalCharacter.id]);

  const dateLabel = formatDateKeyForDisplay(birthdateKey);
  const headingClass = `text-xl font-bold text-center leading-relaxed ${isNight ? "text-slate-100" : "text-slate-800"}`;

  if (revealed) {
    return (
      <div className="flex flex-col items-center gap-8 w-full animate-[fadeIn_0.6s_ease-out]">
        <p className={headingClass}>
          {dateLabel}生まれのあなたに
          <br />
          今日ピッタリのイケメンは「{finalCharacter.name}」!
        </p>
        {children}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      <p className={headingClass}>
        {dateLabel}生まれのあなたに
        <br />
        今日ピッタリのイケメンは?
      </p>
      <div
        className={`relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border ${
          isNight ? "border-slate-600" : "border-pink-100"
        }`}
      >
        {characters.map((c, i) => (
          <Image
            key={c.id}
            src={c.image}
            alt=""
            fill
            priority
            className={`object-cover transition-opacity duration-75 ${i === shuffleIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
    </div>
  );
}
