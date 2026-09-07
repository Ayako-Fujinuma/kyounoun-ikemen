import type { Metadata } from "next";
import Image from "next/image";
import FortuneApp from "@/components/FortuneApp";

const TITLE = "今日の運勢イケメン占い";
const DESCRIPTION =
  "生年月日を入れるだけ。今日のあなたにぴったりのイケメンが応援コメントを届けてくれる無料占いサイト。夜21時からはナイトモードで癒しコメントに切り替わります。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/hero.jpeg", width: 896, height: 1200, alt: "登場キャラクターたち" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/hero.jpeg"],
  },
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center gap-10 px-6 py-16 sm:py-24">
      <div className="text-center space-y-3 max-w-xl">
        <p className="text-sm font-semibold tracking-widest opacity-70">TODAY&apos;S FORTUNE</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug">
          今日の運勢
          <br className="sm:hidden" />
          あなたにピッタリのイケメンが
          <br className="sm:hidden" />
          今日を占います
        </h1>
        <p className="opacity-80 text-base leading-relaxed">
          生年月日を入力するだけで、今日のあなたに寄り添うイケメンが応援コメントを届けてくれます。
          夜21時を過ぎるとナイトモードに切り替わり、癒しのコメントに変わります。
        </p>
      </div>

      <div className="relative w-full max-w-xs sm:max-w-sm aspect-[896/1200] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/hero.jpeg"
          alt="今日のイケメンたち"
          fill
          className="object-cover"
          priority
        />
      </div>

      <FortuneApp />
    </main>
  );
}
