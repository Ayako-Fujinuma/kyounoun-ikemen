import type { Metadata } from "next";
import FortuneApp from "@/components/FortuneApp";
import HeroImage from "@/components/HeroImage";
import { isNightModeJST } from "@/lib/date";

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

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const invalidDate = error === "invalid_date";
  const isNight = isNightModeJST();

  return (
    <main className="flex flex-1 flex-col items-center gap-10 px-6 pt-2 pb-16 sm:pt-4 sm:pb-24">
      <div className="text-center space-y-3 max-w-xl">
        <p className="text-sm font-semibold tracking-widest opacity-70">TODAY&apos;S FORTUNE</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug">
          今日の運勢を
          <br className="sm:hidden" />
          あなたにピッタリのイケメンが
          <br className="sm:hidden" />
          占います
        </h1>
        <p className="opacity-80 text-base leading-relaxed">
          {isNight ? (
            <>
              おかえりなさい。もう夜だから、そっと寄り添う癒しモードに変わってるよ。
              生年月日を教えてくれたら、今日のあなたにぴったりのイケメンが出迎えてくれるよ。
            </>
          ) : (
            <>
              生年月日を教えてくれたら、今日のあなたにぴったりのイケメンが会いに来てくれるよ。
              夜21時を過ぎたら、そっと寄り添う癒しモードに変わるから、帰ってきたら教えてね。
            </>
          )}
        </p>
      </div>

      <HeroImage />

      <FortuneApp initialError={invalidDate ? "正しい生年月日を選んでね" : null} />
    </main>
  );
}
