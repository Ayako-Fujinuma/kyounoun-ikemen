import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "姉妹サイト | 今日の運勢イケメン占い",
  description: "今日の運勢イケメン占いの姉妹サイト、占いババァの今日の運勢ガチャをご紹介します。",
};

export default function SisterSitePage() {
  return (
    <main className="flex-1 px-6 py-16 max-w-xl mx-auto w-full">
      <h1 className="text-2xl font-extrabold text-center mb-2">姉妹サイト</h1>
      <p className="text-center opacity-70 mb-10 text-sm leading-relaxed">
        イケメンだけじゃ物足りない?こちらもどうぞ。
      </p>

      <a
        href="https://kyounoun.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-3xl overflow-hidden shadow-2xl border border-current/10 transition-transform hover:scale-[1.02]"
      >
        <div className="relative w-full aspect-[1408/768]">
          <Image src="/grandma-group.jpeg" alt="占いババァ" fill className="object-cover" />
        </div>
        <div className="p-6 space-y-2">
          <p className="text-xl font-extrabold">占いババァの今日の運勢</p>
          <p className="text-sm opacity-80 leading-relaxed">
            ボタン一つで、今日の総合運・恋愛運・仕事運・金運・健康運がまとめてわかる無料占いガチャ。
            大吉から大凶まで、こちらは正直に出ます。
          </p>
          <p className="text-sm font-semibold underline underline-offset-4">kyounoun.com へ →</p>
        </div>
      </a>
    </main>
  );
}
