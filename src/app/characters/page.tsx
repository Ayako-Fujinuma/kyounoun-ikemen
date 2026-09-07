import type { Metadata } from "next";
import Image from "next/image";
import { characters } from "@/lib/characters";

export const metadata: Metadata = {
  title: "キャラクター紹介 | 今日の運勢イケメン占い",
  description: "今日の運勢イケメン占いに登場するキャラクターたちを紹介します。",
};

export default function CharactersPage() {
  return (
    <main className="flex-1 px-6 py-16 max-w-4xl mx-auto w-full">
      <h1 className="text-2xl font-extrabold text-center mb-2">登場キャラクター</h1>
      <p className="text-center opacity-70 mb-10">あなたの今日には、どのイケメンが現れるかな?</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {characters.map((c) => (
          <div key={c.id} className="flex flex-col items-center gap-2 text-center">
            <div
              className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br ${c.gradient}`}
            >
              <Image src={c.image} alt={c.name} fill className="object-cover" />
            </div>
            <p className="font-bold">
              {c.name} <span className="text-xs font-normal opacity-70">{c.reading}</span>
            </p>
            <p className="text-xs opacity-60">{c.type}</p>
            <p className="text-xs opacity-80 leading-relaxed">{c.intro}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
