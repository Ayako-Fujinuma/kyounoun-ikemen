"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getTodayKeyJST, isNightModeJST, isValidBirthdate } from "@/lib/date";
import { generateFortune, type FortuneResult } from "@/lib/fortune";
import { heartsDisplay } from "@/lib/fortuneHearts";
import { getCachedBirthdate } from "@/lib/birthdateCache";
import FortuneResultCard from "./FortuneResultCard";
import MoreMessages from "./MoreMessages";
import RevealResult from "./RevealResult";
import ShareButtons from "./ShareButtons";

function isValidBirthdateKey(key: string): boolean {
  const match = key.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return false;
  const [, y, m, d] = match;
  return isValidBirthdate(Number(y), Number(m), Number(d));
}

export default function ResultClient() {
  const router = useRouter();
  const [state, setState] = useState<{ birthdateKey: string; result: FortuneResult } | null>(null);

  useEffect(() => {
    const birthdateKey = getCachedBirthdate();
    if (!birthdateKey || !isValidBirthdateKey(birthdateKey)) {
      router.replace("/");
      return;
    }
    const isNight = isNightModeJST();
    const result = generateFortune(birthdateKey, getTodayKeyJST(), isNight);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorageからの初回読み込みのみ、ここでしか行えない
    setState({ birthdateKey, result });
  }, [router]);

  if (!state) return null;

  const { birthdateKey, result } = state;
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const shareUrl = `${origin}/share/${result.character.id}?hearts=${result.hearts}&night=${result.isNight ? 1 : 0}`;
  const shareText = `【今日の運勢イケメン占い】\n今日の運勢 ${heartsDisplay(result.hearts)}\n今日のあなたにピッタリなイケメンは「${result.character.name}」\n「${result.character.catchphrase}」`;

  return (
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
      <Link href="/" className="text-xs opacity-40 underline underline-offset-4 hover:opacity-70">
        トップへ
      </Link>
    </RevealResult>
  );
}
