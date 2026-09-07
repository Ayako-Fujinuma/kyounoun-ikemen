import { headers } from "next/headers";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default async function ContactForm() {
  if (!accessKey) {
    return (
      <p className="rounded-2xl border border-current/20 p-4 text-sm opacity-70">
        フォームの準備中です。
        <a
          href="https://web3forms.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:opacity-100"
        >
          web3forms.com
        </a>
        でアクセスキーを取得し、環境変数{" "}
        <code className="rounded bg-black/10 px-1">NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code>{" "}
        に設定してください。
      </p>
    );
  }

  const hdrs = await headers();
  const host = hdrs.get("host");
  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  const redirectUrl = `${proto}://${host}/contact/thanks`;

  return (
    <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4">
      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="subject" value="【今日の運勢イケメン占い】お問い合わせ" />
      <input type="hidden" name="redirect" value={redirectUrl} />

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-bold">
          お名前
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-xl border border-current/20 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-bold">
          メールアドレス
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-xl border border-current/20 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-bold">
          お問い合わせ内容
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-xl border border-current/20 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <button
        type="submit"
        className="self-center rounded-full bg-pink-500 px-8 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        送信する
      </button>
    </form>
  );
}
