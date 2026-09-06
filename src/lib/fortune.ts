import { characters, type Character } from "./characters";
import { dayMessages, nightMessages } from "./messages";

export interface FortuneResult {
  character: Character;
  message: string;
  isNight: boolean;
}

/**
 * 文字列から決定的なハッシュ値を作る(暗号強度は不要、同じ入力なら常に同じ結果になればよい)。
 */
function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * 生年月日 + 今日の日付(JST)から、今日だけの「ぴったりのイケメン」とメッセージを決定する。
 * 同じ人×同じ日なら必ず同じ結果になり、日が変われば結果も変わる。
 */
export function generateFortune(
  birthdateKey: string,
  todayKey: string,
  isNight: boolean
): FortuneResult {
  const seedBase = `${birthdateKey}#${todayKey}`;
  const character = characters[hashString(`${seedBase}#character`) % characters.length];

  const parts = isNight ? nightMessages : dayMessages;
  const opening = parts.opening[hashString(`${seedBase}#opening`) % parts.opening.length];
  const main = parts.main[hashString(`${seedBase}#main`) % parts.main.length];
  const closing = parts.closing[hashString(`${seedBase}#closing`) % parts.closing.length];

  return {
    character,
    message: `${opening}\n${main}\n${closing}`,
    isNight,
  };
}
