import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { formatDateKey, getTodayKeyJST, isNightModeJST, isValidBirthdate } from "@/lib/date";
import { generateFortune } from "@/lib/fortune";
import FortuneResultCard from "@/components/FortuneResultCard";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "診断結果 | 今日の運勢イケメン占い",
};

function parseBirthParam(birth: string | undefined): string | null {
  const match = birth?.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const [, y, m, d] = match;
  const year = Number(y);
  const month = Number(m);
  const day = Number(d);
  if (!isValidBirthdate(year, month, day)) return null;
  return formatDateKey(year, month, day);
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ birth?: string }>;
}) {
  const { birth } = await searchParams;
  const birthdateKey = parseBirthParam(birth);
  if (!birthdateKey) redirect("/");

  const isNight = isNightModeJST();
  const result = generateFortune(birthdateKey, getTodayKeyJST(), isNight);

  const hdrs = await headers();
  const host = hdrs.get("host");
  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  const shareUrl = `${proto}://${host}/result?birth=${birthdateKey}`;
  const shareText = `今日のあなたにピッタリなのは「${result.character.name}」!\n「${result.character.catchphrase}」`;

  return (
    <main className="flex flex-1 flex-col items-center gap-8 px-6 py-16 sm:py-24">
      <FortuneResultCard result={result} />
      <ShareButtons shareText={shareText} shareUrl={shareUrl} isNight={isNight} />
      <Link
        href="/characters"
        className="text-xs opacity-40 underline underline-offset-4 hover:opacity-70"
      >
        登場キャラクター一覧を見る →
      </Link>
    </main>
  );
}
