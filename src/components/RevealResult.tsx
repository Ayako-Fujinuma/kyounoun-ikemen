"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { characters, type Character } from "@/lib/characters";

const SHUFFLE_INTERVAL_MS = 110;
const SHUFFLE_STEPS = 12;
const PAUSE_ON_LANDED_MS = 350;

interface Props {
  finalCharacter: Character;
  isNight: boolean;
  children: ReactNode;
}

export default function RevealResult({ finalCharacter, isNight, children }: Props) {
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

  if (revealed) {
    return <div className="flex flex-col items-center gap-8 w-full animate-[fadeIn_0.6s_ease-out]">{children}</div>;
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      <p className={`text-xl font-bold text-center leading-relaxed ${isNight ? "text-slate-100" : "text-slate-800"}`}>
        今日あなたにぴったりの
        <br />
        イケメンは……
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
