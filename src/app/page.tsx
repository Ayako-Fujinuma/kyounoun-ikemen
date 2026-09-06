import type { Metadata } from "next";
import Link from "next/link";
import FortuneApp from "@/components/FortuneApp";

export const metadata: Metadata = {
  title: "今日の運勢イケメン占い",
  description:
    "生年月日を入れるだけ。今日のあなたにぴったりのイケメンが応援コメントを届けてくれる無料占いサイト。夜21時からはナイトモードで癒しコメントに切り替わります。",
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

      <FortuneApp />

      <Link
        href="/characters"
        className="text-sm font-semibold underline underline-offset-4 opacity-80 hover:opacity-100"
      >
        登場キャラクター一覧を見る →
      </Link>
    </main>
  );
}
