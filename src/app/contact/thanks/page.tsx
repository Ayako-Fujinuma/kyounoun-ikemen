import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "送信完了 | 今日の運勢イケメン占い",
  description: "お問い合わせありがとうございました。",
};

export default function ContactThanksPage() {
  return (
    <main className="flex-1 px-6 py-24 max-w-xl mx-auto w-full text-center">
      <h1 className="text-2xl font-extrabold mb-4">送信しました</h1>
      <p className="opacity-70 text-sm leading-relaxed mb-8">
        お問い合わせいただきありがとうございます。内容を確認のうえ、必要に応じてご連絡いたします。
      </p>
      <Link
        href="/"
        className="inline-block rounded-full bg-pink-500 px-8 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        トップページに戻る
      </Link>
    </main>
  );
}
