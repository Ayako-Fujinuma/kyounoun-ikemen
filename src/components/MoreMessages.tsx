"use client";

import { useState } from "react";
import { generateRandomMessage } from "@/lib/fortune";

export default function MoreMessages({ isNight }: { isNight: boolean }) {
  const [messages, setMessages] = useState<string[]>([]);

  function handleMore() {
    setMessages((prev) => [...prev, generateRandomMessage(isNight)]);
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
        className={`text-sm font-semibold underline underline-offset-4 opacity-70 hover:opacity-100`}
      >
        もっと応援コメントを見る
      </button>
    </div>
  );
}
