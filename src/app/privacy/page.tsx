import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 今日の運勢イケメン占い",
  description: "今日の運勢イケメン占いのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 mx-auto max-w-2xl px-6 pt-2 pb-16 sm:pt-4 sm:pb-24 text-sm leading-relaxed">
      <h1 className="text-2xl font-bold">プライバシーポリシー</h1>
      <p className="mt-4 opacity-70">
        「今日の運勢イケメン占い」(以下、「当サイト」といいます)は、利用者のプライバシーを尊重し、以下の方針に基づき個人情報を取り扱います。
      </p>

      <div className="mt-6 space-y-6 opacity-80">
        <section>
          <h2 className="text-base font-bold opacity-100">1. 取得する情報</h2>
          <p className="mt-1">
            当サイトの占い結果は、お使いの端末のブラウザ(localStorage)にのみ保存され、運営者を含む第三者のサーバーには送信されません。お問い合わせフォームをご利用いただいた場合は、フォームに入力されたお名前・メールアドレス・お問い合わせ内容を取得します。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold opacity-100">2. 広告配信について</h2>
          <p className="mt-1">
            当サイトでは、第三者配信の広告サービス(Google
            AdSenseなど)を利用する場合があります。これらの広告配信事業者は、利用者の興味に応じた広告を表示するためにCookieを使用することがあります。Cookieを無効にする方法や広告配信の詳細については、
            <a
              href="https://policies.google.com/technologies/ads?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-70"
            >
              Googleの広告ポリシー
            </a>
            をご確認ください。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold opacity-100">3. アクセス解析について</h2>
          <p className="mt-1">
            当サイトでは、サイト改善のためにGoogle
            アナリティクスなどのアクセス解析ツールを利用しています。これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold opacity-100">4. 個人情報の管理</h2>
          <p className="mt-1">
            お問い合わせにて取得した個人情報は、お問い合わせへの対応以外の目的には使用せず、適切に管理いたします。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold opacity-100">5. プライバシーポリシーの変更</h2>
          <p className="mt-1">
            当サイトは、必要に応じて本ポリシーの内容を変更することがあります。変更後の内容は本ページに掲載した時点から効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold opacity-100">6. お問い合わせ</h2>
          <p className="mt-1">
            本ポリシーに関するお問い合わせは
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
