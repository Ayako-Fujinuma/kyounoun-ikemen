import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { formatDateKey, getTodayKeyJST, isNightModeJST, isValidBirthdate } from "@/lib/date";
import { generateFortune, type FortuneResult } from "@/lib/fortune";
import { getCharacterOgImage } from "@/lib/characters";
import { heartsDisplay } from "@/lib/fortuneHearts";
import FortuneResultCard from "@/components/FortuneResultCard";
import MoreMessages from "@/components/MoreMessages";
import RevealResult from "@/components/RevealResult";
import ShareButtons from "@/components/ShareButtons";

type Props = {
  searchParams: Promise<{ birth?: string }>;
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

async function resolveResult(
  searchParams: Props["searchParams"]
): Promise<{ birthdateKey: string; result: FortuneResult } | null> {
  const { birth } = await searchParams;
  const birthdateKey = parseBirthParam(birth);
  if (!birthdateKey) return null;
  const isNight = isNightModeJST();
  const result = generateFortune(birthdateKey, getTodayKeyJST(), isNight);
  return { birthdateKey, result };
}

async function absoluteUrl(path: string): Promise<string> {
  const hdrs = await headers();
  const host = hdrs.get("host");
  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}${path}`;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolved = await resolveResult(searchParams);
  if (!resolved) return { title: "診断結果 | 今日の運勢イケメン占い" };

  const { character, hearts, isNight } = resolved.result;
  const title = `今日の運勢は${heartsDisplay(hearts)}${character.name}からの応援メッセージ | 今日の運勢イケメン占い`;
  const description = character.catchphrase;
  const imageUrl = await absoluteUrl(getCharacterOgImage(character, isNight));

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: character.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ResultPage({ searchParams }: Props) {
  const resolved = await resolveResult(searchParams);
  if (!resolved) redirect("/?error=invalid_date");
  const { birthdateKey, result } = resolved;

  const shareUrl = await absoluteUrl(`/result?birth=${birthdateKey}`);
  const shareText = `【今日の運勢イケメン占い】\n今日の運勢 ${heartsDisplay(result.hearts)}\n今日のあなたにピッタリなホストは「${result.character.name}」\n「${result.character.catchphrase}」`;

  return (
    <main className="flex flex-1 flex-col items-center gap-8 px-6 py-16 sm:py-24">
      <RevealResult finalCharacter={result.character} isNight={result.isNight} birthdateKey={birthdateKey}>
        <FortuneResultCard result={result} />
        <MoreMessages
          character={result.character}
          isNight={result.isNight}
          voiceMode={result.voiceMode}
          shownOpening={result.opening}
          shownMain={result.main}
          shownClosing={result.closing}
        />
        <ShareButtons shareText={shareText} shareUrl={shareUrl} isNight={result.isNight} />
        <Link
          href="/characters"
          className="text-xs opacity-40 underline underline-offset-4 hover:opacity-70"
        >
          登場キャラクター一覧を見る →
        </Link>
        <Link
          href="/"
          className="text-xs opacity-40 underline underline-offset-4 hover:opacity-70"
        >
          トップへ
        </Link>
      </RevealResult>
    </main>
  );
}
