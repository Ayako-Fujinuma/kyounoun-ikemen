import Image from "next/image";
import type { FortuneResult } from "@/lib/fortune";

export default function FortuneResultCard({ result }: { result: FortuneResult }) {
  const { character, message, isNight } = result;

  return (
    <div
      className={`w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border animate-[fadeIn_0.5s_ease-out] ${
        isNight ? "bg-slate-800/80 border-slate-600" : "bg-white/90 border-pink-100"
      }`}
    >
      <div className={`relative aspect-[3/4] bg-gradient-to-br ${character.gradient}`}>
        <Image
          src={character.image}
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
