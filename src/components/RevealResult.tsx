"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { characters, getCharacterImage, type Character } from "@/lib/characters";
import { formatDateKeyForDisplay } from "@/lib/date";

const SHUFFLE_INTERVAL_MS = 110;
const SHUFFLE_LAPS = 2;
const SHUFFLE_DURATION_MS = characters.length * SHUFFLE_LAPS * SHUFFLE_INTERVAL_MS;
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

  // setIntervalのコールバック回数ではなく実経過時間で判定することで、
  // タブのバックグラウンド化などでコールバックが飛んでも演出の合計時間が短くならないようにする。
  useEffect(() => {
    const finalIndex = characters.findIndex((c) => c.id === finalCharacter.id);
    const startTime = Date.now();

    const intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;

      if (elapsed >= SHUFFLE_DURATION_MS) {
        clearInterval(intervalId);
        setShuffleIndex(finalIndex);
        setTimeout(() => setRevealed(true), PAUSE_ON_LANDED_MS);
        return;
      }

      const stepIndex = Math.floor(elapsed / SHUFFLE_INTERVAL_MS) % characters.length;
      setShuffleIndex(stepIndex);
    }, SHUFFLE_INTERVAL_MS);

    return () => clearInterval(intervalId);
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
            src={getCharacterImage(c, isNight)}
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
