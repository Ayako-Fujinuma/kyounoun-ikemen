# kyounoun-ikemen

今日の運勢イケメン占い — 生年月日を入れるだけで、今日のあなたにぴったりのイケメンが応援コメントを届けてくれる無料占いサイト。夜21時からはナイトモードで癒しコメントに切り替わる。

公開URL: https://ikemen.kyounoun.com/

姉妹サイト: [占いババアの今日の運勢](https://kyounoun.com/)

## スタック

- Next.js (App Router) / TypeScript / Tailwind CSS
- Cloudflare Workers (`@opennextjs/cloudflare` + `wrangler`)

## 開発

```bash
npm install
npm run dev
```

## 環境変数

`.env.example` を `.env.local` にコピーし、お問い合わせフォーム用の
[Web3Forms](https://web3forms.com) アクセスキーを設定してください。

```bash
cp .env.example .env.local
```

## デプロイ

`main` ブランチへの push で GitHub Actions が Cloudflare Workers へ自動デプロイする。
