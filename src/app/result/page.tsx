import type { Metadata } from "next";
import ResultClient from "@/components/ResultClient";

export const metadata: Metadata = {
  title: "診断結果 | 今日の運勢イケメン占い",
  description: "今日のあなたにぴったりのイケメンからの応援メッセージ。",
  robots: { index: false },
};

export default function ResultPage() {
  return (
    <main className="flex flex-1 flex-col items-center gap-8 px-6 pt-2 pb-16 sm:pt-4 sm:pb-24">
      <ResultClient />
    </main>
  );
}
