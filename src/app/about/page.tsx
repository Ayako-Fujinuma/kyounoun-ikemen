import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "運営者情報 | 今日の運勢イケメン占い",
  description: "今日の運勢イケメン占いの運営者情報について。",
};

export default function AboutPage() {
  return (
    <main className="flex-1 mx-auto max-w-2xl px-6 pt-2 pb-16 sm:pt-4 sm:pb-24 text-sm leading-relaxed">
      <h1 className="text-2xl font-bold">運営者情報</h1>

      <div className="mt-6 space-y-6 opacity-80">
        <section>
          <h2 className="text-base font-bold opacity-100">サイト名</h2>
          <p className="mt-1">今日の運勢イケメン占い</p>
        </section>

        <section>
          <h2 className="text-base font-bold opacity-100">運営者</h2>
          <p className="mt-1">個人(お問い合わせフォームよりご連絡いただけます)</p>
        </section>

        <section>
          <h2 className="text-base font-bold opacity-100">サイトについて</h2>
          <p className="mt-1">
            「今日の運勢イケメン占い」は、生年月日を入力するだけで今日のあなたにぴったりのイケメンが応援コメントを届けてくれる、無料の占いエンタメサイトです。結果はエンタメ・娯楽を目的としたものであり、当サイトの占い結果によって生じたいかなる損害についても運営者は責任を負いかねます。キャラクターの画像はすべてAI生成によるオリジナル創作です。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold opacity-100">お問い合わせ</h2>
          <p className="mt-1">
            ご意見・ご要望などは
            <a href="/contact" className="underline underline-offset-4 hover:opacity-70">
              お問い合わせフォーム
            </a>
            よりお願いいたします。
          </p>
        </section>
      </div>
    </main>
  );
}
