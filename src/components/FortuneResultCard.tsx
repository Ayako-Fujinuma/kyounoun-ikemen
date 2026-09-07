import Image from "next/image";
import type { FortuneResult } from "@/lib/fortune";
import { getCharacterImage } from "@/lib/characters";
import { MAX_HEARTS } from "@/lib/fortuneHearts";

export default function FortuneResultCard({ result }: { result: FortuneResult }) {
  const { character, hearts, message, isNight } = result;

  return (
    <div
      className={`w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border animate-[fadeIn_0.5s_ease-out] ${
        isNight ? "bg-slate-800/80 border-slate-600" : "bg-white/90 border-pink-100"
      }`}
    >
      <div className={`text-center py-4 ${isNight ? "bg-slate-900/50" : "bg-black/[.03]"}`}>
        <p className={`text-xs font-semibold tracking-widest ${isNight ? "text-slate-300" : "text-slate-500"}`}>
          今日の運勢
        </p>
        <div className="flex justify-center gap-1 text-2xl" aria-label={`ハート${hearts}個`}>
          {Array.from({ length: MAX_HEARTS }, (_, i) => (
            <span
              key={i}
              className={i < hearts ? "text-rose-500" : isNight ? "text-slate-600" : "text-slate-200"}
            >
              ♥
            </span>
          ))}
        </div>
      </div>
      <div className={`relative aspect-[3/4] bg-gradient-to-br ${character.gradient}`}>
        <Image
          src={getCharacterImage(character, isNight)}
          alt={character.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white text-2xl font-bold">{character.name}</p>
        </div>
      </div>
      <div className="p-6 space-y-3">
        <p className={`text-sm italic ${isNight ? "text-slate-300" : "text-slate-500"}`}>
          「{character.catchphrase}」
        </p>
        <p className={`whitespace-pre-line leading-relaxed text-lg ${isNight ? "text-slate-100" : "text-slate-800"}`}>
          {message}
        </p>
      </div>
    </div>
  );
}
