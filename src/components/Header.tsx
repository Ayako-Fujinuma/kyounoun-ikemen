import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 max-w-3xl mx-auto">
      <Link href="/" className="font-bold text-lg tracking-tight">
        今日のイケメン占い
      </Link>
      <nav className="flex gap-4 text-sm font-medium opacity-80">
        <Link href="/">診断</Link>
        <Link href="/characters">キャラ紹介</Link>
      </nav>
    </header>
  );
}
