"use client";

import { useRef, useState } from "react";
import type { Character } from "@/lib/characters";
import type { VoiceMode } from "@/lib/fortune";
import { characterVoices, dayMain, nightMain } from "@/lib/messages";

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * 同じ候補を全部使い切るまで繰り返さない「福引き袋」方式のピッカー。
 * 純粋なランダムだと直近と同じ・似た文が出やすいための対策。
 * alreadyShownは、診断結果ですでに見せた分を最初の1周だけ除外するための値。
 */
function createBagPicker(items: string[], alreadyShown?: string) {
  let bag: string[] = [];
  return function pick(): string {
    if (bag.length === 0) {
      const rest = alreadyShown ? items.filter((item) => item !== alreadyShown) : items;
      bag = shuffle(rest.length > 0 ? rest : items);
    }
    return bag.pop()!;
  };
}

interface Props {
  character: Character;
  isNight: boolean;
  voiceMode: VoiceMode;
  shownOpening: string;
  shownMain: string;
  shownClosing: string;
}

export default function MoreMessages({
  character,
  isNight,
  voiceMode,
  shownOpening,
  shownMain,
  shownClosing,
}: Props) {
  const [messages, setMessages] = useState<string[]>([]);
  const pickersRef = useRef<{ opening: () => string; main: () => string; closing: () => string } | null>(null);

  if (pickersRef.current === null) {
    const voice = characterVoices[character.id][voiceMode];
    pickersRef.current = {
      opening: createBagPicker(voice.opening, shownOpening),
      main: createBagPicker(voiceMode === "night" ? nightMain : dayMain, shownMain),
      closing: createBagPicker(voice.closing, shownClosing),
    };
  }

  function handleMore() {
    const { opening, main, closing } = pickersRef.current!;
    setMessages((prev) => [...prev, `${opening()}\n${main()}\n${closing()}`]);
  }

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-md">
      {messages.map((message, i) => (
        <p
          key={i}
          className={`whitespace-pre-line text-center text-sm leading-relaxed rounded-2xl px-4 py-3 w-full animate-[fadeIn_0.5s_ease-out] ${
            isNight ? "bg-slate-800/60 text-slate-100" : "bg-white/70 text-slate-700"
          }`}
        >
          {message}
        </p>
      ))}
      <button
        type="button"
        onClick={handleMore}
        className="text-sm font-semibold underline underline-offset-4 opacity-70 hover:opacity-100"
      >
        もっと応援コメントを見る
      </button>
    </div>
  );
}
