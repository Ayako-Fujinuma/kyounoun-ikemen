import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto w-full max-w-3xl mx-auto px-6 py-8 flex flex-col items-center gap-3 text-sm opacity-70">
      <nav className="flex flex-wrap justify-center gap-4">
        <Link href="/characters" className="hover:opacity-100">
          キャラ紹介
        </Link>
        <Link href="/sister-site" className="hover:opacity-100">
          姉妹サイト
        </Link>
        <Link href="/about" className="hover:opacity-100">
          運営者情報
        </Link>
        <Link href="/privacy" className="hover:opacity-100">
          プライバシーポリシー
        </Link>
        <Link href="/contact" className="hover:opacity-100">
          お問い合わせ
        </Link>
      </nav>
      <p className="text-xs opacity-70">&copy; {new Date().getFullYear()} 今日の運勢イケメン占い</p>
    </footer>
  );
}
